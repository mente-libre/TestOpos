'use client';

import { useState, useRef, type DragEvent } from 'react';
import { Upload, Loader2, AlertCircle, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getQuestionsFromPdf } from '@/app/actions';
import type { Document } from '@/app/page';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type FileUploaderProps = {
  onQuestionsExtracted: (doc: Document) => void;
};

export function FileUploader({ onQuestionsExtracted }: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const processPdf = async (pdfIdentifier: string, fileName: string) => {
    setIsUploading(true);
    setError(null);
    try {
      const result = await getQuestionsFromPdf(pdfIdentifier);

      if (result.success && result.questions) {
        onQuestionsExtracted({ fileName, questions: result.questions });
        toast({
          title: 'Éxito',
          description: `Se extrajeron ${result.questions.length} preguntas de ${fileName}.`,
        });
      } else {
        const errorMessage = result.error || 'Ocurrió un error desconocido.';
        setError(errorMessage);
        toast({
          variant: 'destructive',
          title: 'Error de extracción',
          description: errorMessage,
        });
      }
    } catch (e) {
      const errorMessage = 'Ocurrió un error al contactar al servidor.';
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Error de Red',
        description: errorMessage,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = async (file: File | null) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setError('Por favor, sube solo archivos PDF.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const pdfDataUri = reader.result as string;
      await processPdf(pdfDataUri, file.name);
    };
    reader.onerror = () => {
      setError('No se pudo leer el archivo.');
      toast({
        variant: 'destructive',
        title: 'Error de Archivo',
        description: 'No se pudo leer el archivo seleccionado.',
      });
    };
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfUrl) {
      setError('Por favor, introduce una URL.');
      return;
    }
    // Simple validation for a URL
    try {
      new URL(pdfUrl);
    } catch (_) {
      setError('La URL introducida no es válida.');
      return;
    }
    
    // We pass the URL directly to the server action
    await processPdf(pdfUrl, pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1));
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Sube un Examen</CardTitle>
        <CardDescription>
          Arrastra y suelta un PDF, selecciónalo desde tu equipo o pega una URL. La IA extraerá las preguntas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload"><Upload className="mr-2 h-4 w-4"/> Subir Archivo</TabsTrigger>
            <TabsTrigger value="url"><Link className="mr-2 h-4 w-4"/>Desde URL</TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <div
              className={cn(
                'mt-4 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300',
                'border-border hover:border-primary hover:bg-secondary',
                isDragging && 'border-primary bg-primary/10 scale-105'
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files ? e.target.files[0] : null)}
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  <p className="text-muted-foreground">Procesando tu PDF...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className="h-10 w-10" />
                  <p>Arrastra un PDF aquí o haz clic para subir</p>
                  <p className="text-xs">Tamaño máximo del archivo: 10MB</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="url">
            <form onSubmit={handleUrlSubmit} className="mt-4 space-y-4">
              <Input
                type="url"
                placeholder="https://ejemplo.com/examen.pdf"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
                disabled={isUploading}
              />
              <Button type="submit" className="w-full" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  'Extraer de URL'
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

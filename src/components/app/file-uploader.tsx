'use client';

import { useState, useRef, type DragEvent } from 'react';
import { Upload, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getQuestionsFromPdf } from '@/app/actions';
import type { Document } from '@/app/page';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type FileUploaderProps = {
  onQuestionsExtracted: (doc: Document) => void;
};

export function FileUploader({ onQuestionsExtracted }: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (file: File | null) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setError('Por favor, sube solo archivos PDF.');
      return;
    }

    setIsUploading(true);
    setError(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const pdfDataUri = reader.result as string;
      const result = await getQuestionsFromPdf(pdfDataUri);

      if (result.success && result.questions) {
        onQuestionsExtracted({ fileName: file.name, questions: result.questions });
        toast({
          title: 'Éxito',
          description: `Se extrajeron ${result.questions.length} preguntas de ${file.name}.`,
        });
      } else {
        setError(result.error || 'Ocurrió un error desconocido.');
        toast({
          variant: 'destructive',
          title: 'Error de extracción',
          description: result.error || 'No se pudieron extraer las preguntas.',
        });
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setError('No se pudo leer el archivo.');
      setIsUploading(false);
      toast({
        variant: 'destructive',
        title: 'Error de Archivo',
        description: 'No se pudo leer el archivo seleccionado.',
      });
    };
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
          Arrastra y suelta un PDF o haz clic para seleccionarlo. La IA extraerá las preguntas por ti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300',
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

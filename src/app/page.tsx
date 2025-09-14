'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileUp, Bot, BarChart3, Upload } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">Opofy</div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Inicio</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Exámenes</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Estadísticas</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Ayuda</a>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login" passHref>
                <Button variant="ghost">Iniciar Sesión</Button>
              </Link>
              <Link href="/register" passHref>
                <Button>Registrarse</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prepara tus oposiciones con exámenes reales</h1>
            <p className="max-w-3xl mx-auto text-lg text-secondary mb-8">
              Sube tus exámenes en PDF y genera tests personalizados para practicar. Mejora tu rendimiento con inteligencia artificial.
            </p>
            <Link href="/register" passHref>
                <Button size="lg">Comenzar ahora</Button>
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <FileUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sube tus exámenes</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sube los PDFs de exámenes anteriores. Organízalos por categoría, comunidad o año.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">IA genera tests</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Nuestra IA analiza los documentos y crea tests personalizados con preguntas y respuestas.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Analiza tu progreso</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Obtén estadísticas detalladas de tu rendimiento, identifica tus puntos débiles y mejora.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-light dark:bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tus exámenes</h2>
            
            <Card className="mb-12">
              <CardHeader>
                <h3 className="text-xl font-semibold">Subir nuevo examen</h3>
              </CardHeader>
              <CardContent>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors mb-6"
                  onClick={handleUploadAreaClick}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4"/>
                  <p className="text-muted-foreground">{selectedFileName ? `Archivo seleccionado: ${selectedFileName}` : 'Haz clic o arrastra aquí tu archivo PDF'}</p>
                  <input ref={fileInputRef} type="file" id="fileInput" accept=".pdf" className="hidden" onChange={handleFileChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-end">
                    <div>
                        <label htmlFor="examCategory" className="block text-sm font-medium text-gray-700 mb-1">Categoría:</label>
                        <Select>
                            <SelectTrigger id="examCategory">
                                <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="madrid">Comunidad de Madrid</SelectItem>
                                <SelectItem value="valencia">Comunidad Valenciana</SelectItem>
                                <SelectItem value="andalucia">Andalucía</SelectItem>
                                <SelectItem value="estado">Administración del Estado</SelectItem>
                                <SelectItem value="otros">Otras</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button>Procesar examen</Button>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Tus categorías</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-transform">
                    <div className="bg-primary text-primary-foreground font-semibold p-4 rounded-t-lg">
                        Comunidad de Madrid
                    </div>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold text-primary mb-2">5</div>
                        <p className="text-muted-foreground">exámenes disponibles</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-transform">
                    <div className="bg-primary text-primary-foreground font-semibold p-4 rounded-t-lg">
                        Administración del Estado
                    </div>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold text-primary mb-2">3</div>
                        <p className="text-muted-foreground">exámenes disponibles</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-transform">
                    <div className="bg-primary text-primary-foreground font-semibold p-4 rounded-t-lg">
                        Comunidad Valenciana
                    </div>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold text-primary mb-2">2</div>
                        <p className="text-muted-foreground">exámenes disponibles</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-8 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p>© 2024 Opofy - Preparación inteligente para oposiciones</p>
            <p className="text-sm text-gray-400 mt-2">Una app segura y eficaz para tu preparación</p>
        </div>
      </footer>
    </div>
  );
}

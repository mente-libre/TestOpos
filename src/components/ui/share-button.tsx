"use client";

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ShareButton() {
  const { toast } = useToast();

  const handleShare = async () => {
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: 'TestOpos - Prepara tus Oposiciones con IA',
          text: 'He encontrado esta increíble aplicación para practicar tests de oposiciones con tests reales y generación por IA. ¡Pruébala!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error al compartir:', error);
        // The user might have cancelled the share action, so we don't show an error toast.
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "¡Enlace copiado!",
          description: "El enlace a la aplicación se ha copiado en tu portapapeles.",
        });
      } catch (err) {
        console.error('Error al copiar el enlace:', err);
        toast({
            variant: "destructive",
            title: "Error",
            description: "No se pudo copiar el enlace al portapapeles.",
        });
      }
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: "No se pudo compartir ni copiar el enlace.",
        });
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="hidden sm:inline-flex"
      onClick={handleShare}
    >
      <Share2 className="mr-2 h-4 w-4" />
      Compartir
    </Button>
  );
}

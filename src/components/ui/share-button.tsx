"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ShareButton() {
  const [isSupported, setIsSupported] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // The navigator object is only available in the browser.
    // We also check if the share method is supported.
    if (typeof navigator !== 'undefined' && navigator.share) {
      setIsSupported(true);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'TestOpos - Prepara tus Oposiciones con IA',
          text: 'He encontrado esta increíble aplicación para practicar tests de oposiciones con tests reales y generación por IA. ¡Pruébala!',
          url: window.location.href, // Shares the current URL
        });
      } catch (error) {
        console.error('Error al compartir:', error);
        // The user might have cancelled the share action, so we don't show an error toast.
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
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

import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

function LoadingFallback() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-8 w-8 animate-spin" />
        <p>Cargando test...</p>
      </div>
    );
}


export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  );
}

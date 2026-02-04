import { NextResponse } from 'next/server';
import { getFirestore } from '@/lib/firebase/firebase-admin';

const CATEGORIES_TO_SEED = [
    { id: "madrid", name: "Auxiliar Administrativo Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

export async function POST() {
    // Secure this endpoint to only run in development
    if (process.env.NODE_ENV !== 'development') {
        return new NextResponse(JSON.stringify({ error: 'This endpoint is only available in development mode.' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        console.log('Iniciando el proceso de siembra de datos vía API route...');
        const firestore = await getFirestore();
        const categoriesCollection = firestore.collection('categories');
        const batch = firestore.batch();
        let writeCount = 0;

        console.log(`Añadiendo ${CATEGORIES_TO_SEED.length} categorías...`);

        for (const category of CATEGORIES_TO_SEED) {
            const docRef = categoriesCollection.doc(category.id);
            batch.set(docRef, { name: category.name });
            writeCount++;
        }

        await batch.commit();
        
        const successMessage = `¡Éxito! Se han añadido o actualizado ${writeCount} categorías.`;
        console.log(successMessage);

        return new NextResponse(JSON.stringify({ message: successMessage }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error durante el proceso de siembra:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return new NextResponse(JSON.stringify({ error: 'Error durante el proceso de siembra', details: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
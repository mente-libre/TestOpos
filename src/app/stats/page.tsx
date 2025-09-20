
'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { onAuthStateChange, type User } from '@/lib/firebase/auth';
import { type TestResult } from '@/lib/definitions';
import { loadStatistics } from '@/app/actions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { getAuthHeaders } from '@/lib/utils';


import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2, ArrowLeft, TrendingUp, Target, ListChecks } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface OverallStats {
    totalTests: number;
    averageScore: number;
    totalQuestions: number;
    correctQuestions: number;
}

// Wrapper function to call server action with auth headers
async function loadStatisticsWithAuth() {
    const headers = await getAuthHeaders();
    // This is a simplified example. In a real app, you would pass headers to your fetch call.
    // Since server actions are called directly, we need a different mechanism.
    // For this prototype, we'll assume the action can get the user from the session.
    return loadStatistics();
}


export default function StatsPage() {
    const [user, setUser] = useState<User | null>(null);
    const [stats, setStats] = useState<TestResult[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChange((firebaseUser) => {
            setUser(firebaseUser);
            if (!firebaseUser) {
                setIsLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            const fetchStats = async () => {
                setIsLoading(true);
                const result = await loadStatisticsWithAuth();
                if (result.success && result.stats) {
                    // Sort stats by date ascending for the chart
                    const sortedStats = result.stats.sort((a, b) => (a.createdAt as number) - (b.createdAt as number));
                    setStats(sortedStats);
                } else {
                    setError(result.error || 'No se pudieron cargar las estadísticas.');
                }
                setIsLoading(false);
            };
            fetchStats();
        }
    }, [user]);

    const overallStats: OverallStats | null = useMemo(() => {
        if (!stats || stats.length === 0) return null;

        const totalTests = stats.length;
        const totalScore = stats.reduce((acc, current) => acc + current.score, 0);
        const totalQuestions = stats.reduce((acc, current) => acc + current.totalQuestions, 0);
        const correctQuestions = stats.reduce((acc, current) => acc + current.correctCount, 0);

        return {
            totalTests,
            averageScore: totalTests > 0 ? Math.round(totalScore / totalTests) : 0,
            totalQuestions,
            correctQuestions,
        };
    }, [stats]);
    
    const chartData = useMemo(() => {
        if (!stats) return [];
        return stats.map((stat, index) => ({
            name: `Test ${index + 1}`,
            puntuacion: stat.score,
            fecha: format(new Date(stat.createdAt as number), 'dd/MM/yy')
        }));
    }, [stats]);


    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                <p>Cargando estadísticas...</p>
            </div>
        );
    }
    
    if (!user) {
         return (
            <div className="flex flex-col justify-center items-center min-h-screen text-center">
                <p className="text-red-500 mb-4">Debes iniciar sesión para ver tus estadísticas.</p>
                <Link href="/login" passHref>
                <Button>Iniciar Sesión</Button>
                </Link>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen text-center">
                <p className="text-red-500 mb-4">{error}</p>
                 <Link href="/" passHref>
                    <Button>Volver al inicio</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" passHref><Logo /></Link>
                    </div>
                    <Link href="/" passHref>
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio</Button>
                    </Link>
                </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <BarChart className="h-12 w-12 text-primary mx-auto mb-4"/>
                        <h1 className="text-4xl font-bold mb-2">Tus Estadísticas</h1>
                        <p className="text-lg text-muted-foreground">Analiza tu progreso y descubre dónde mejorar.</p>
                    </div>

                    {stats && stats.length > 0 && overallStats ? (
                        <div className="space-y-8">
                             <div className="grid gap-6 md:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Tests Realizados</CardTitle>
                                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{overallStats.totalTests}</div>
                                        <p className="text-xs text-muted-foreground">Total de tests completados</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Puntuación Media</CardTitle>
                                        <Target className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{overallStats.averageScore}%</div>
                                        <p className="text-xs text-muted-foreground">Promedio de aciertos</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Aciertos Totales</CardTitle>
                                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{overallStats.correctQuestions} / {overallStats.totalQuestions}</div>
                                        <p className="text-xs text-muted-foreground">Preguntas correctas del total</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Evolución de Puntuación</CardTitle>
                                    <CardDescription>Tu rendimiento a lo largo del tiempo.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                     <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="fecha" />
                                            <YAxis />
                                            <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))' }}/>
                                            <Legend />
                                            <Line type="monotone" dataKey="puntuacion" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Historial de Tests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Fecha</TableHead>
                                                <TableHead>Título del Test</TableHead>
                                                <TableHead className="text-center">Puntuación</TableHead>
                                                <TableHead className="text-center">Correctas</TableHead>
                                                <TableHead className="text-center">Incorrectas</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {stats.slice().reverse().map(result => (
                                                <TableRow key={result.id}>
                                                    <TableCell>{format(new Date(result.createdAt as number), 'PPP', { locale: es })}</TableCell>
                                                    <TableCell className="font-medium">{result.testTitle}</TableCell>
                                                    <TableCell className="text-center font-bold">{result.score}%</TableCell>
                                                    <TableCell className="text-center text-green-600">{result.correctCount}</TableCell>
                                                    <TableCell className="text-center text-red-600">{result.incorrectCount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>

                        </div>
                    ) : (
                        <div className="text-center py-16 border-2 border-dashed rounded-lg">
                            <p className="text-muted-foreground">Aún no has completado ningún test.</p>
                            <Link href="/" passHref>
                                <Button variant="link" className="mt-4">Empieza tu primer test para ver tus estadísticas</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}


    
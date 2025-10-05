
'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { auth, onAuthStateChanged, type User } from '@/lib/firebase/auth';
import { type TestResult, type UserRanking } from '@/lib/definitions';
import { loadStatistics, loadRankingData } from '@/app/actions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2, ArrowLeft, TrendingUp, Target, ListChecks, Trophy } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface OverallStats {
    totalTests: number;
    averageScore: number;
    totalQuestions: number;
    correctQuestions: number;
}

export default function StatsPage() {
    const [user, setUser] = useState<User | null>(null);
    const [personalStats, setPersonalStats] = useState<TestResult[]>([]);
    const [ranking, setRanking] = useState<UserRanking[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            if (!firebaseUser) {
                // For non-logged-in users, we might just show the ranking
                fetchRanking();
            }
        });
        return () => unsubscribe();
    }, []);
    
    const fetchRanking = async () => {
        setIsLoading(true);
        const rankingResult = await loadRankingData();
        if (rankingResult.success && rankingResult.ranking) {
            // Sort the ranking by average score in descending order
            const sortedRanking = rankingResult.ranking.sort((a, b) => b.averageScore - a.averageScore);
            setRanking(sortedRanking);
        } else {
            setError(rankingResult.error || 'No se pudo cargar el ranking.');
        }
        setIsLoading(false);
    };


    useEffect(() => {
        const fetchAllData = async () => {
             setIsLoading(true);
             setError(null);

            // Fetch global ranking
            const rankingResult = await loadRankingData();
            if (rankingResult.success && rankingResult.ranking) {
                // Sort the ranking by average score in descending order
                const sortedRanking = rankingResult.ranking.sort((a, b) => b.averageScore - a.averageScore);
                setRanking(sortedRanking);
            } else {
                 setError(rankingResult.error || 'No se pudo cargar el ranking.');
            }

            // Fetch personal stats if user is logged in
            if (user) {
                const statsResult = await loadStatistics();
                if (statsResult.success && statsResult.stats) {
                    const sortedStats = statsResult.stats.sort((a, b) => (a.createdAt as number) - (b.createdAt as number));
                    setPersonalStats(sortedStats);
                } else {
                    // Don't overwrite ranking error if it exists
                    if (!error) setError(statsResult.error || 'No se pudieron cargar las estadísticas personales.');
                }
            }
             setIsLoading(false);
        }
        
       fetchAllData();
    }, [user]);

    const overallStats: OverallStats | null = useMemo(() => {
        if (!personalStats || personalStats.length === 0) return null;

        const totalTests = personalStats.length;
        const totalScore = personalStats.reduce((acc, current) => acc + current.score, 0);
        const totalQuestions = personalStats.reduce((acc, current) => acc + current.totalQuestions, 0);
        const correctQuestions = personalStats.reduce((acc, current) => acc + current.correctCount, 0);

        return {
            totalTests,
            averageScore: totalTests > 0 ? Math.round(totalScore / totalTests) : 0,
            totalQuestions,
            correctQuestions,
        };
    }, [personalStats]);
    
    const chartData = useMemo(() => {
        if (!personalStats) return [];
        return personalStats.map((stat, index) => ({
            name: `Test ${index + 1}`,
            puntuacion: stat.score,
            fecha: format(new Date(stat.createdAt as number), 'dd/MM/yy')
        }));
    }, [personalStats]);


    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                <p>Cargando datos...</p>
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
                        <Trophy className="h-12 w-12 text-primary mx-auto mb-4"/>
                        <h1 className="text-4xl font-bold mb-2">Ranking y Estadísticas</h1>
                        <p className="text-lg text-muted-foreground">Compara tu progreso con otros y analiza tu rendimiento.</p>
                    </div>

                    {user && personalStats && personalStats.length > 0 && overallStats && (
                        <div className="mb-12">
                             <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Tus Estadísticas Personales</h2>
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

                            <Card className="mt-6">
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
                        </div>
                    )}
                    
                    {ranking && ranking.length > 0 ? (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Ranking Global de Usuarios</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px] text-center">Pos.</TableHead>
                                            <TableHead>Usuario</TableHead>
                                            <TableHead className="text-center">Puntuación Media</TableHead>
                                            <TableHead className="text-center">Tests Realizados</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {ranking.map((player, index) => (
                                            <TableRow key={player.userId} className={player.userId === user?.uid ? 'bg-primary/10' : ''}>
                                                <TableCell className="text-center font-bold">{index + 1}</TableCell>
                                                <TableCell className="font-medium">{player.userName}</TableCell>
                                                <TableCell className="text-center font-bold text-primary">{player.averageScore}%</TableCell>
                                                <TableCell className="text-center">{player.testsTaken}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    ) : (
                         <div className="text-center py-16 border-2 border-dashed rounded-lg">
                            <p className="text-muted-foreground">Aún no hay suficientes datos para mostrar un ranking.</p>
                            <Link href="/" passHref>
                                <Button variant="link" className="mt-4">¡Sé el primero en completar un test!</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

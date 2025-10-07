'use client';

import { useEffect, useState } from 'react';
import { getLocalTestResults, clearLocalTestResults } from '@/lib/local-storage';
import { type TestResult } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StatsPage() {
  const [results, setResults] = useState<TestResult[]>([]);

  useEffect(() => {
    setResults(getLocalTestResults());
  }, []);

  const handleClearHistory = () => {
    clearLocalTestResults();
    setResults([]);
  };

  const chartData = results.map(result => ({
    name: new Date(result.createdAt).toLocaleDateString(),
    Puntuación: result.score,
  }));

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tus Estadísticas</h1>
        <Button variant="destructive" onClick={handleClearHistory}>Limpiar Historial</Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Rendimiento en Tests</CardTitle>
        </CardHeader>
        <CardContent>
          {results.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Puntuación" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>Aún no has completado ningún test.</p>
          )}
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mb-4">Historial de Tests</h2>
      <div className="space-y-4">
        {results.map(result => (
          <Card key={result.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{result.testName || 'Test General'}</p>
                  <p className="text-sm text-gray-500">{new Date(result.createdAt).toLocaleString()}</p>
                </div>
                <div className="text-right">
                    <p className={`text-lg font-bold ${result.score > 50 ? 'text-green-600' : 'text-red-600'}`}>
                        {result.score.toFixed(2)}%
                    </p>
                  <p className="text-sm">{result.correctAnswers} / {result.totalQuestions} correctas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { type TestResult } from './definitions';

const RESULTS_KEY = 'testResults';

export function getLocalTestResults(): TestResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const results = window.localStorage.getItem(RESULTS_KEY);
    return results ? JSON.parse(results) : [];
  } catch (error) {
    console.error('Error reading from local storage', error);
    return [];
  }
}

export function saveLocalTestResult(result: Omit<TestResult, 'id'>) {
  if (typeof window === 'undefined') return;
  try {
    const results = getLocalTestResults();
    const newResult: TestResult = { ...result, id: new Date().toISOString() };
    results.push(newResult);
    window.localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    console.error('Error saving to local storage', error);
  }
}

export function clearLocalTestResults() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(RESULTS_KEY);
  } catch (error) {
    console.error('Error clearing local storage', error);
  }
}

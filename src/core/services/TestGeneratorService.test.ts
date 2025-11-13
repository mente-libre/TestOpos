import { describe, it, expect, vi } from 'vitest';
import { TestGeneratorService } from './TestGeneratorService';
import { LLMProvider, Question, Test, SpecificTestParams, MixedTestParams, ReviewTestParams } from '../types';
import { ZodSchema, z } from 'zod';

// --- Test Fixtures ---

const MOCK_TEST_QUESTION: Question = {
  questionText: '¿Cuál es la capital de España?',
  options: ['Barcelona', 'Lisboa', 'Madrid', 'París'],
  correctAnswerIndex: 2,
  explanation: 'Madrid es la capital de España desde 1606.',
};

// --- Mock LLM Provider ---

/**
 * A mock implementation of the LLMProvider for testing purposes.
 * It immediately returns a predefined successful response without calling any AI.
 */
class MockLLMProvider implements LLMProvider {
  // vi.fn() creates a spy, allowing us to check if it was called, with what args, etc.
  generate = vi.fn(async <T extends ZodSchema>(
    prompt: string,
    outputSchema: T
  ): Promise<z.infer<T>> => {
    // Dynamically create a response that fits the requested schema length
    const schemaDef = (outputSchema as any).shape.questions._def.exactLength;
    const numQuestions = schemaDef ? schemaDef.value : 1;
    return Promise.resolve({ questions: Array(numQuestions).fill(MOCK_TEST_QUESTION) });
  });
}

// --- Test Suite ---

describe('TestGeneratorService', () => {

  // Note: For these tests to pass, the `build...Prompt` methods in TestGeneratorService
  // should be changed from `private` to `public` to allow direct testing.

  describe('Prompt Engineering', () => {
    it('should build the specific test prompt correctly', () => {
      const service = new TestGeneratorService(null as any); // Provider not needed for this test
      const params: SpecificTestParams = {
        category: 'Derecho Constitucional',
        numQuestions: 5,
        level: 'Medio',
      };
      
      const prompt = service.buildSpecificTestPrompt(params);
      
      expect(prompt).toContain('generar un test de 5 preguntas');
      expect(prompt).toContain('exclusivamente en el siguiente tema: "Derecho Constitucional"');
      expect(prompt).toContain("El nivel de dificultad debe ser 'Medio'");
    });

    it('should build the mixed test prompt correctly', () => {
      const service = new TestGeneratorService(null as any);
      const params: MixedTestParams = {
        categories: ['Contratos del Sector Público', 'Función Pública'],
        numQuestions: 20,
        level: 'Alto',
      };

      const prompt = service.buildMixedTestPrompt(params);

      expect(prompt).toContain('generar un test de 20 preguntas');
      expect(prompt).toContain('mezcle preguntas de los siguientes temas: Contratos del Sector Público, Función Pública');
      expect(prompt).toContain("El nivel de dificultad debe ser 'Alto'");
    });

    it('should build the review test prompt correctly', () => {
      const service = new TestGeneratorService(null as any);
      const params: ReviewTestParams = {
        context: 'Pregunta fallada 1...\nPregunta fallada 2...',
        numQuestions: 15,
      };
      
      const prompt = service.buildReviewTestPrompt(params);

      expect(prompt).toContain('generar un test de repaso de 15 preguntas');
      expect(prompt).toContain('--- CONTEXTO ---\n      Pregunta fallada 1...\nPregunta fallada 2...\n      --- FIN DEL CONTEXTO ---');
    });
  });

  describe('Test Generation Logic', () => {
    it('generateSpecificTest should call the LLM provider with the correct prompt and dynamic schema', async () => {
      const mockProvider = new MockLLMProvider();
      const service = new TestGeneratorService(mockProvider);
      const params: SpecificTestParams = {
        category: 'Derecho Administrativo',
        numQuestions: 10,
        level: 'Difícil',
      };

      const result = await service.generateSpecificTest(params);

      expect(mockProvider.generate).toHaveBeenCalledTimes(1);
      expect(result.questions).toHaveLength(10);
      
      // Check the prompt passed to the provider
      const calledPrompt = mockProvider.generate.mock.calls[0][0];
      expect(calledPrompt).toContain('generar un test de 10 preguntas');
      expect(calledPrompt).toContain('Derecho Administrativo');

      // Check the dynamic schema passed to the provider
      const calledSchema = mockProvider.generate.mock.calls[0][1];
      const parseResult = calledSchema.safeParse({ questions: Array(10).fill(MOCK_TEST_QUESTION) });
      expect(parseResult.success).toBe(true);
      
      const invalidParseResult = calledSchema.safeParse({ questions: Array(5).fill(MOCK_TEST_QUESTION) });
      expect(invalidParseResult.success).toBe(false);
    });

    it('should return the correct data from the provider', async () => {
        const mockProvider = new MockLLMProvider();
        const service = new TestGeneratorService(mockProvider);
        const params: SpecificTestParams = {
          category: 'Test',
          numQuestions: 1,
          level: 'Fácil',
        };

        const result = await service.generateSpecificTest(params);

        expect(result.questions).toHaveLength(1);
        expect(result.questions[0]).toEqual(MOCK_TEST_QUESTION);
    });
  });
});

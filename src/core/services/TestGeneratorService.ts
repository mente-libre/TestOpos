import { z } from 'zod';
import { LLMProvider, MixedTestParams, ReviewTestParams, SpecificTestParams, TestSchema } from '../types';

/**
 * Service class responsible for all business logic related to test generation.
 * It is completely decoupled from any framework or external library (like Genkit or React).
 */
export class TestGeneratorService {
  /**
   * @param llmProvider An instance of an LLM provider that conforms to the LLMProvider interface.
   */
  constructor(private llmProvider: LLMProvider) {}

  // --- Public Methods (API of our business logic) ---

  public async generateSpecificTest(params: SpecificTestParams): Promise<z.infer<typeof TestSchema>> {
    const validatedParams = this.validateAndExtractParams(params, 'specific');
    const prompt = this.buildSpecificTestPrompt(validatedParams);
    const outputSchema = this.createDynamicTestSchema(validatedParams.numQuestions);
    return this.llmProvider.generate(prompt, outputSchema);
  }

  public async generateMixedTest(params: MixedTestParams): Promise<z.infer<typeof TestSchema>> {
    const validatedParams = this.validateAndExtractParams(params, 'mixed');
    const prompt = this.buildMixedTestPrompt(validatedParams);
    const outputSchema = this.createDynamicTestSchema(validatedParams.numQuestions);
    return this.llmProvider.generate(prompt, outputSchema);
  }

  public async generateReviewTest(params: ReviewTestParams): Promise<z.infer<typeof TestSchema>> {
    const validatedParams = this.validateAndExtractParams(params, 'review');
    const prompt = this.buildReviewTestPrompt(validatedParams);
    const outputSchema = this.createDynamicTestSchema(validatedParams.numQuestions);
    return this.llmProvider.generate(prompt, outputSchema);
  }

  // --- Prompt Engineering (Now testable and centralized) ---

  private buildSpecificTestPrompt(params: SpecificTestParams): string {
    return `Eres un asistente experto en la creación de exámenes de oposición para la administración pública en España.
      Tu tarea es generar un test de ${params.numQuestions} preguntas tipo test con 4 opciones de respuesta cada una.
      El test debe centrarse exclusivamente en el siguiente tema: "${params.category}".
      El nivel de dificultad debe ser '${params.level}'.
      Para cada pregunta, proporciona el texto de la pregunta, una lista de 4 opciones, el índice de la respuesta correcta y una breve explicación.
      Genera exactamente ${params.numQuestions} preguntas. No generes ni más ni menos.
      La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`;
  }

  private buildMixedTestPrompt(params: MixedTestParams): string {
    const themes = params.categories.join(', ');
    return `Eres un asistente experto en la creación de exámenes de oposición para la administración pública en España.
      Tu tarea es generar un test de ${params.numQuestions} preguntas tipo test con 4 opciones de respuesta cada una.
      El test debe ser un repaso general que mezcle preguntas de los siguientes temas: ${themes}.
      El nivel de dificultad debe ser '${params.level}'.
      Para cada pregunta, proporciona el texto de la pregunta, una lista de 4 opciones, el índice de la respuesta correcta y una breve explicación.
      Asegúrate de que las preguntas sean relevantes, claras y bien formuladas.
      Genera exactamente ${params.numQuestions} preguntas.
      La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`;
  }

  private buildReviewTestPrompt(params: ReviewTestParams): string {
    return `Eres un asistente experto en la creación de exámenes de oposición en España.
      Tu tarea es generar un test de repaso de ${params.numQuestions} preguntas.
      Este test se basará en las preguntas que el usuario ha fallado anteriormente, las cuales se proporcionan en el siguiente contexto:
      --- CONTEXTO ---
      ${params.context}
      --- FIN DEL CONTEXTO ---
      Analiza los temas de las preguntas falladas y genera ${params.numQuestions} preguntas nuevas y originales que cubran esos mismos temas.
      Para cada pregunta, proporciona el texto de la pregunta, 4 opciones de respuesta, el índice de la respuesta correcta y una breve explicación.
      La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`;
  }

  // --- Dynamic Schema Generation ---

  private createDynamicTestSchema(numQuestions: number) {
    return z.object({
      questions: z.array(z.object({
        questionText: z.string(),
        options: z.array(z.string()).length(4),
        correctAnswerIndex: z.number().min(0).max(3),
        explanation: z.string().optional(),
      })).length(numQuestions),
    });
  }

  // --- Input Validation ---
  
  private validateAndExtractParams<T extends SpecificTestParams | MixedTestParams | ReviewTestParams>(params: T, type: 'specific' | 'mixed' | 'review') {
      // This is where you would add more complex validation logic if needed.
      // For now, it just returns the params as is, but it's a good placeholder.
      return params;
  }
}

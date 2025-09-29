
import { type Question } from './definitions';

export const officeTest: {
  fileName: string;
  category: string;
  questions: Question[];
} = {
  fileName: 'Test de Ofimática (Demo)',
  category: 'office',
  questions: [
    {
      questionText: '¿Qué combinación de teclas se utiliza para cortar un elemento?',
      options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
      correctAnswerIndex: 2,
      explanation: 'La combinación de teclas para cortar un elemento es Ctrl + X.',
    },
    {
      questionText: 'En un procesador de textos, ¿para qué se utiliza la función "justificar"?',
      options: [
        'Para alinear el texto a la izquierda.',
        'Para alinear el texto a la derecha.',
        'Para centrar el texto.',
        'Para alinear el texto a ambos márgenes.',
      ],
      correctAnswerIndex: 3,
      explanation: 'La función "justificar" alinea el texto uniformemente a los márgenes izquierdo y derecho.'
    }
  ],
};

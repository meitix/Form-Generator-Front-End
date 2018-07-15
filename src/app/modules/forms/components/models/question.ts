import { QuestionType } from './question-type';
import { QuestionOption } from './question-option';

export interface Question {
  text: string;
  value: any;
  type: QuestionType;
  options: QuestionOption[];
  order: number;
  isRequired: boolean;
}

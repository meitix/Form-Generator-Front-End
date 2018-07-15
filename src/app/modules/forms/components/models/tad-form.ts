import { Question } from './question';

export interface TadForm {
  _id: string;
  title: string;
  isEnable: boolean;
  questions: Question[];
  results: any[];
}

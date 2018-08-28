import { QuestionType } from './question-type';
import { QuestionOption } from './question-option';

export interface Question {
  text: string;
  value: any;
  type: QuestionType;
  options: QuestionOption[];
  order: number;
  isRequired: boolean;
  extendedForm?: {
    _id: string,
    allowAddNewResult: boolean,
    type: ExtendedFormDisplayType
  };
}

export enum ExtendedFormDisplayType {
  dropbox = 0 ,
  autoComplete = 10,
  checkbox = 20 ,
  radio = 30
}

export const DisplayTypeTitles = {
  '0': 'لیست کشویی',
  10: 'تکمیل خودکار',
  20: 'چند انتخابی',
  30: 'تک انتخابی'
};

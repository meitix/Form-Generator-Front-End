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
    type: number,
    fieldsToView?: string[],
    primaryKey?: any
  };
}

export const ExtendedFormDisplayType = {
  table: 10,
  multiple: 20 ,
  single: 30
};

export const DisplayTypeTitles = {
  10: 'جدول',
  30: 'تک انتخابی',
  20: 'چند انتخابی'
};

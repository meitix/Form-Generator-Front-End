import { Injectable } from '@angular/core';
import { QuestionOption } from '../../../models/question-option';
import { Question } from '../../../models/question';

@Injectable()
export class QuestionOptionService {

  constructor() { }

  createOption(text: string , order: number): QuestionOption {
    return { order: order , text: text };
  }

  addOptionToQuestion(question: Question, option: QuestionOption) {
    question.options.push(option);
  }

  remove(option: QuestionOption , question: Question) {
   question.options = question.options.filter(function(item){
       return item.text !== option.text;
    });
  }

  sortOptions(question: Question) {
    question.options = question.options.sort(function(a, b) {
      return a.order >= b.order ? 1 : -1;
    });
  }
}

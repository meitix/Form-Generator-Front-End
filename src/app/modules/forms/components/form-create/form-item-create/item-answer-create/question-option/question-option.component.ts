import { Component, OnInit, Input } from '@angular/core';
import { QuestionOption } from '../../../../models/question-option';
import { QuestionOptionService } from '../question-option.service';
import { Question } from '../../../../models/question';

@Component({
  selector: 'app-question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.css']
})
export class QuestionOptionComponent implements OnInit {

  @Input() option: QuestionOption;
  @Input() question: Question;
  constructor(private optionService: QuestionOptionService) { }

  ngOnInit() {
  }

  deleteOption(opt: QuestionOption) {
    this.optionService.remove(opt , this.question);
  }

  reduceOrder() {
    this.question.options[this.option.order - 1 ].order++;
    this.option.order--;
    this.optionService.sortOptions(this.question);
  }
}

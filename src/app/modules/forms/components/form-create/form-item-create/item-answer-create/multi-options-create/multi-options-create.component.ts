import { Component, OnInit, Input } from '@angular/core';
import { QuestionOptionService } from '../question-option.service';
import { FormService } from '../../../../../services/form.service';
import { Question } from '../../../../models/question';

@Component({
  selector: 'app-multi-options-create',
  templateUrl: './multi-options-create.component.html',
  styleUrls: ['./multi-options-create.component.css']
})
export class MultiOptionsCreateComponent implements OnInit {

 @Input() question: Question;
  optionText: string;

  constructor(private optionService: QuestionOptionService) {
    this.optionText = '';
   }

  ngOnInit() {
  }

  addOption() {
    const option = this.optionService.createOption(this.optionText , this.question.options.length);
    this.optionService.addOptionToQuestion(this.question , option);
    this.optionText = '';
  }

}

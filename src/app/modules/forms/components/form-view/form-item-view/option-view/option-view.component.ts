import { Component, OnInit, Input } from '@angular/core';
import { QuestionOption } from '../../../models/question-option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option-view',
  templateUrl: './option-view.component.html',
  styleUrls: ['./option-view.component.css']
})
export class OptionViewComponent implements OnInit {
@Input() options: QuestionOption[];
@Input() controleName: string;
@Input() form: FormGroup;
@Input() selectedValue: string;

  constructor() { }

  ngOnInit() {}

selectOption(a: HTMLAnchorElement) {
   a.click();
}

}

import { Component, OnInit } from '@angular/core';
import { Question, ExtendedFormDisplayType } from '../../../models/question';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-extended-form-view',
  templateUrl: './extended-from-view.component.html',
  styleUrls: ['./extended-from-view.component.css']
})
export class ExtendedFromViewComponent implements OnInit {

  question: Question;
  result: any;
  type = ExtendedFormDisplayType;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getFormResults(this.question.extendedForm._id).subscribe(result => {
      this.result = result;
    });

  }
}

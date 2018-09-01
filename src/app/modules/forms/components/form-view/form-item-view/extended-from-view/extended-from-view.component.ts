import { Component, OnInit, Input } from '@angular/core';
import { Question, ExtendedFormDisplayType } from '../../../models/question';
import { FormService } from '../../../../services/form.service';
import { FormGroup } from '@angular/forms';
import { Select2Options } from '../../../../config/select2.config';

@Component({
  selector: 'app-extended-form-view',
  templateUrl: './extended-from-view.component.html',
  styleUrls: ['./extended-from-view.component.css']
})
export class ExtendedFromViewComponent implements OnInit {

  @Input() question: Question;
  // result: QuestionOption[];
  result: string[];
  type = ExtendedFormDisplayType;
  select2Options = Select2Options;

  @Input() controleName: string;
  @Input() form: FormGroup;
  @Input() selectedValue: string;
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getFormResults(this.question.extendedForm._id).subscribe(result => {
      this.result = [];
      result.forEach(r => {
      const title = [];
        this.question.extendedForm.fieldsToView.forEach(f => {
          title.push(r[f]);
        });
        // this.result.push({text: title.join(' , ')});
        this.result.push(title.join(' - '));
      });
      console.log(this.result);
    });

  }
}

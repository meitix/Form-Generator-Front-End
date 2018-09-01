import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../../../services/form.service';
import { TadForm } from '../../../../models/tad-form';
import { Question, ExtendedFormDisplayType, DisplayTypeTitles } from '../../../../models/question';
import * as Enumerable from 'linq';
import { QuestionOption } from '../../../../models/question-option';


@Component({
  selector: 'app-extended-form',
  templateUrl: './extended-form.component.html',
  styleUrls: ['./extended-form.component.css']
})
export class ExtendedFormComponent implements OnInit {

  userForms: TadForm[];
  @Input() question: Question;
  selectedForm: TadForm;
  DisplayTypeTitles = DisplayTypeTitles;
  fieldsOfForm: string[];
  selectedFields: string[];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllformsFromServer().subscribe(forms => {
      this.userForms = forms;
      // load selected form if extists.
      // its will use in edit form.
      if (this.question.extendedForm) {
        this.selectedForm = forms.find(form => form._id === this.question.extendedForm._id);
        this.setFieldsOfForm();
      }
    });
  }

  selectExtendedForm(form: TadForm) {
    this.selectedForm = form;
    this.question.extendedForm = {
      _id: form._id,
      allowAddNewResult: false,
      type: ExtendedFormDisplayType.single,
      fieldsToView: []
    };
    this.selectedFields = this.question.extendedForm.fieldsToView;
    this.setFieldsOfForm();
  }

  setExtendedFormType(type: number) {
    this.question.extendedForm.type = type;
  }

  toggleSelectFieldToView(data: { value: string[] }) {
    this.question.extendedForm.fieldsToView = data.value;

  }

  getFieldsOfForm(form: TadForm) {
    return Enumerable.from(form.questions).select(f => f.text).toArray();
  }

  setFieldsOfForm() {
    this.fieldsOfForm = this.getFieldsOfForm(this.selectedForm);
  }

  selectPrimaryKey(data: { value: string }) {
    this.question.extendedForm.primaryKey = data.value;
  }
}

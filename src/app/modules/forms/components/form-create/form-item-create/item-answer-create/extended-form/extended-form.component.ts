import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../../../services/form.service';
import { TadForm } from '../../../../models/tad-form';
import { Question, ExtendedFormDisplayType, DisplayTypeTitles } from '../../../../models/question';
import * as Enumerable from 'linq';


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
      }
    });
  }

  selectExtendedForm(form: TadForm) {
    this.selectedForm = form;
    this.question.extendedForm = {
      _id: form._id,
      allowAddNewResult: false,
      type: ExtendedFormDisplayType.dropdown,
      fieldsToView: []
    };
    this.selectedFields = this.question.extendedForm.fieldsToView;
    this.fieldsOfForm = Enumerable.from(this.selectedForm.questions).select(f => f.text).toArray();
  }

  setExtendedFormType(type: number) {
    this.question.extendedForm.type = type;
  }

  toggleSelectFieldToView(data: {value: string[]}) {
    this.question.extendedForm.fieldsToView = data.value;
  }
}

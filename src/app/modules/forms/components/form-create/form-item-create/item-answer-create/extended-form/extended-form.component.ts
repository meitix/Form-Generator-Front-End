import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../../../services/form.service';
import { TadForm } from '../../../../models/tad-form';
import { Question, ExtendedFormDisplayType , DisplayTypeTitles} from '../../../../models/question';

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
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllformsFromServer().subscribe(forms => {
      this.userForms = forms;
    });
  }

  selectExtendedForm(form: TadForm) {
    this.selectedForm = form;
    this.question.extendedForm = {
      _id: form._id,
      allowAddNewResult: false,
      type: ExtendedFormDisplayType.dropbox
    };
  }

  setExtendedFormType(type: ExtendedFormDisplayType) {
    this.question.extendedForm.type = type;
  }

}

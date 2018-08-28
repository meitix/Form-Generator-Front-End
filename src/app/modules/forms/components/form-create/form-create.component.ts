import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { QuestionType } from '../models/question-type';
import { Question } from '../models/question';
import { TadForm } from '../models/tad-form';
import {
  NgForm
} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  questionTypes: QuestionType[];
  addedQuestionTypes: QuestionType[];
  currentForm: TadForm;
  @Input() isOnEditMode: boolean;

  userForms: TadForm[];
  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addedQuestionTypes = [];
  }

  ngOnInit() {
    this.questionTypes = this.formService.getAvalibleQuestionTypes();
    this.currentForm = this.formService.getCurrentForm();
  }

  submitForm(f: NgForm): void {
    this.formService.saveCurrentForm().subscribe(
      res => {
        this.cancel();
      },
      err => {
        console.log(err);
      }
    );
  }

  selectQuestionType(type: QuestionType) {
      const question = this.createQuestion(type);
      this.formService.addQuestionToCurrentForm(question);
  }

  private showModalforSelectSavedForm() {
  }


  // create question depend on QuestionType that passed.
  private createQuestion(type: QuestionType): Question {
    return { text: '', value: null, type: type, options: [], order: 0, isRequired: false };
  }


  cancel() {
    this.formService.resetCurrentForm();
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

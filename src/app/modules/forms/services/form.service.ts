import { Injectable } from '@angular/core';
import { QuestionTypesConfig } from './question-types.config';
import { QuestionType } from '../components/models/question-type';
import { TadForm } from '../components/models/tad-form';
import { Question } from '../components/models/question';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { FormResult } from '../components/models/form-result';
import { HttpRequestResult } from '../../../models/http-request-result';
import { AuthService } from '../../authentication/services/auth.service';
import { Roles } from '../seed-data/roles';
import { ServerConfig } from '../../../app-config/server-config';

@Injectable()
export class FormService {
  private questionTypes: QuestionType[];
  private currentForm: TadForm;

  private serverUrl: string;

  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.questionTypes = [];
    this.serverUrl = ServerConfig.serverUrl;
  }

  getAvalibleQuestionTypes(): QuestionType[] {
    this.questionTypes = QuestionTypesConfig;
    return this.questionTypes;
  }
  createEmptyForm(): TadForm {
    return { _id: null, isEnable: true, questions: [], title: '' , results: [] };
  }
  getCurrentForm(): TadForm {
    if (!this.currentForm) {
      this.resetCurrentForm();
    }
    return this.currentForm;
  }

  setCurrentForm(form: TadForm) {
    this.currentForm = form;
  }

  addQuestionToCurrentForm(question: Question) {
    this.currentForm.questions.push(question);
  }

  removeQuestion(question: Question) {
    this.currentForm.questions = this.currentForm.questions.filter(function(
      item
    ) {
      return item.text !== question.text;
    });
  }

  saveCurrentForm() {
    const user = this.authService.getCurrentUser();
    return this.http.post(this.serverUrl + 'addForm', {form : this.currentForm , user: user });
  }

  getAllformsFromServer() {
    const user = this.authService.getCurrentUser();
    return this.http.get(this.serverUrl.concat('usersForms' , '/', user._id)).map((response: Response) => {
      const data = <HttpRequestResult> response.json();
      return <TadForm[]>data.data;
    });
  }

  deleteFrom(form: TadForm) {
    return this.http
      .post(this.serverUrl + 'delete', { formId: form._id })
      .map((response: Response) => {
        const res = response.json();
        return res.status;
      });
  }

  sortQuestions() {
    // sort questions by order
    this.currentForm.questions = this.currentForm.questions.sort(function(
      a,
      b
    ) {
      return a.order >= b.order ? 1 : -1;
    });
  }

  resetCurrentForm() {
    this.currentForm = this.createEmptyForm();
  }

  getFormById(_id: string) {
    return this.http
      .get(this.serverUrl.concat('form', '/', _id))
      .map((res: Response) => {
        const forms = res.json();
        return <TadForm>forms.form;
      });
  }

  sendFormResult(formResult: FormResult) {
    formResult.results['کاربر'] = this.authService.getCurrentUser().username;
    return this.http.post(this.serverUrl.concat('formResult'), formResult).map(
      res => {
        return <HttpRequestResult>res.json();
      },
      err => {
        console.log(err);
      }
    );
  }

  getFormResults(formId: string) {
    const user = this.authService.getCurrentUser();
  return this.http.get(this.serverUrl.concat('formResult', '/', formId , '/', user._id))
    .map(
      (res) => {
        return (<HttpRequestResult>res.json()).data;
      }
    );
  }

  getFormRoles(): string[] {
    return Roles;
  }

  addUsersToForm(formUsers: any[]) {
    return this.http.post(this.serverUrl.concat('addUsersToForm') , formUsers ).map(
      res => {
        return <HttpRequestResult> res.json();
      },
      err => {
          console.log(err);
      }
    );
  }

  getFormUsers(formId: string) {
    return this.http.get(this.serverUrl.concat('formUsers', '/' , formId)).map(
      res => {
        const httpResult = <HttpRequestResult> res.json();
        return <{formId: string , user: {username: string, _id: string } , role: string}[]> httpResult.data;
      },
      err => {
        console.log(err);
      }
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { TadForm } from '../models/tad-form';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '@angular/router';
import { makeDecorator } from '@angular/core/src/util/decorators';
import { FormResult } from '../models/form-result';
import { Alert } from 'selenium-webdriver';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html'
})

export class FormViewComponent implements OnInit, OnDestroy {
  form: TadForm;
  resultForm: FormGroup;
  resultValues: any;
  routeSubescription: Subscription;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private resultService: ResultService
  ) {}

  ngOnInit() {
    this.routeSubescription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.formService.getFormById(id).subscribe(
        (form: TadForm) => {
          this.form = form;
          // get form result value
          this.resultValues = this.resultService.getCurrentResult();
          this.fillFormWithResults();
          this.makeFormGroup();
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  makeFormGroup() {
    const group: any = {};

    this.form.questions.forEach(question => {
      group[question.text] = question.isRequired
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    this.resultForm = new FormGroup(group);
  }

  fillFormWithResults() {
    if (!this.resultValues) {
      return;
    }

    const qNum = this.form.questions.length;

    this.form.questions.forEach( question => {
      question.value = this.resultValues[question.text];
    });
  }

  submit() {
    let formResult: FormResult;
    if (this.resultValues) {
      formResult = new FormResult(this.form._id, this.resultForm.value , this.resultValues._id);
    } else {
      formResult = new FormResult(this.form._id, this.resultForm.value );
    }
    this.formService.sendFormResult(formResult).subscribe(res => {
      if (res.success) {
        alert('اطلاعات با موفقیت ثبت شد');
      } else {
        alert(res.message);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubescription.unsubscribe();
    this.resultService.setCurrentResult(null);
  }
}

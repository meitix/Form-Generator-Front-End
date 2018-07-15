import { Component, OnInit, OnDestroy, Input, } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Question } from '../../models/question';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-item-view',
    templateUrl: './form-item-view.component.html',
    styleUrls: ['./form-item-view.component.css']
})
export class FormItemViewComponent implements OnInit {

  @Input() question: Question;
  @Input() index: number;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.text].valid; }

    constructor() { }

    ngOnInit() {
    }
}

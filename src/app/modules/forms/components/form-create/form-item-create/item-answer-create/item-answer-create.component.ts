import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-item-answer-create',
  templateUrl: './item-answer-create.component.html',
  styleUrls: ['./item-answer-create.component.css']
})
export class ItemAnswerCreateComponent implements OnInit {
  @Input() question: Question;

  constructor() {}

  ngOnInit() {}

}

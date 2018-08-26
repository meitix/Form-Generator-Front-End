import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() content: string;
  @Input() isOpen: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('id') modalId;
  constructor() { }

  ngOnInit() {
  }

}

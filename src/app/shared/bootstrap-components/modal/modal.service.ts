import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}

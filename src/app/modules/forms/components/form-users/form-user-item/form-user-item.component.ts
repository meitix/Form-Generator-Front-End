import { Component, OnInit , EventEmitter , Output , Input} from '@angular/core';
import { User } from '../../../../users/models/user';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form-user-item',
  templateUrl: './form-user-item.component.html',
  styleUrls: ['./form-user-item.component.css']
})
export class FormUserItemComponent implements OnInit {
   @Output() userRemove = new EventEmitter<User>();
  @Input() item: {user: User , role: string};
  formRoles: string[];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formRoles = this.formService.getFormRoles();
  }

  selectRole(role) {
    this.item.role = role;
  }

  remove() {
    this.userRemove.emit(this.item.user);
  }

}

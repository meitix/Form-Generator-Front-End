import { Component, OnInit, ViewChild } from '@angular/core';
import { TadForm } from '../models/tad-form';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../users/sevices/user.service';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../users/models/user';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  searchUsername: string;
  form: TadForm;
  userSearchUrl: string;
  searchResults: User[];
  idSubscription: Subscription;
  formUsers: any[];


  constructor(
    private userService: UserService,
    private formService: FormService,
    private route: ActivatedRoute
  ) {
      this.searchResults = [];
      this.formUsers = [];
  }

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe(params => {
      const id = params['id'];

      this.formService.getFormById(id).subscribe(res => {
        this.form = res;
      });

      this.formService.getFormUsers(id).subscribe(
        res => {
          this.formUsers = res || [];
        }
      );
    });

  }

  submit() {
    this.formService.addUsersToForm(this.formUsers).subscribe(
      res => {
        if (res.success) {
          alert('تغییرات با موفقیت اعمال شد');
        } else {
          alert(res.error.errmsg);
        }
      }
    );
  }

  addUserToForm(user) {
    this.formUsers.push({user: user , role: '' , formId: this.form._id });
    this.resetSearchReluts();
    this.emptySearchBox();
  }

  removeUserFromFrom(user: User) {
    this.formUsers = this.formUsers.filter(function(u) {
        return u.user._id !== user._id;
    });
  }

  doSearch() {
    if (this.searchUsername.length > 2) {
      this.userService.search(this.searchUsername).subscribe(
        res => {
          this.searchResults = res;
        }
      );
    } else {
      this.resetSearchReluts();
    }
  }

  resetSearchReluts() {
    this.searchResults = [];
  }

  emptySearchBox() {
    this.searchUsername = '';
  }

}

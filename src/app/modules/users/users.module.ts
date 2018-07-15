import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserService } from './sevices/user.service';
import { UserStartComponent } from './components/user-start/user-start.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActiveStatusPipe } from './pipes/active-status.pipe';
import { RolesPipe } from './pipes/roles.pipe';
import { FormService } from '../forms/services/form.service';
import { AuthService } from '../authentication/services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UserService , FormService , AuthService],
  declarations: [UserCreateComponent, UserStartComponent, UserListComponent, ActiveStatusPipe, RolesPipe]
})
export class UsersModule { }

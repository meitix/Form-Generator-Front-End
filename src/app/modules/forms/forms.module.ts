import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlertService } from 'ng2-sweetalert2';
import { OptionViewComponent } from './components/form-view/form-item-view/option-view/option-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormListComponent } from './components/form-list/form-list.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormResultsComponent } from './components/form-results/form-results.component';
import { FormService } from './services/form.service';
import { FormsRoutingModule } from './forms-routing/forms-routing.module';
import { FormStartComponent } from './components/form-start/form-start.component';
import { FormItemCreateComponent } from './components/form-create/form-item-create/form-item-create.component';
import { ItemAnswerCreateComponent } from './components/form-create/form-item-create/item-answer-create/item-answer-create.component';
// tslint:disable-next-line:max-line-length
import { MultiOptionsCreateComponent } from './components/form-create/form-item-create/item-answer-create/multi-options-create/multi-options-create.component';
// tslint:disable-next-line:max-line-length
import { QuestionOptionComponent } from './components/form-create/form-item-create/item-answer-create/question-option/question-option.component';
import { QuestionOptionService } from './components/form-create/form-item-create/item-answer-create/question-option.service';
import { FormViewComponent } from './components/form-view/form-view.component';
import { FormItemViewComponent } from './components/form-view/form-item-view/form-item-view.component';
import { ResultService } from './services/result.service';
import { UserService } from '../users/sevices/user.service';
import { AuthService } from '../authentication/services/auth.service';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { FormUserItemComponent } from './components/form-users/form-user-item/form-user-item.component';
import { DatePipe } from '../../pipes/date.pipe';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FormChartsComponent } from './components/form-charts/form-charts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    FormListComponent,
    FormCreateComponent,
    FormEditComponent,
    FormResultsComponent,
    FormStartComponent,
    FormItemCreateComponent,
    ItemAnswerCreateComponent,
    MultiOptionsCreateComponent,
    QuestionOptionComponent,
    FormViewComponent,
    FormItemViewComponent,
    OptionViewComponent,
    FormUsersComponent,
    FormUserItemComponent,
    DatePipe,
    TranslatePipe,
    FormChartsComponent
  ],
  providers: [
    FormService,
    QuestionOptionService,
    SweetAlertService,
    ResultService,
    AuthService,
    UserService
  ],
  exports: [FormListComponent]
})
export class FormGeneratorModule {}

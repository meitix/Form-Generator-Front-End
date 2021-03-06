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
import { LbdModule } from '../lbd/lbd.module';
import { BootstrapComponentsModule } from '../../shared/bootstrap-components/bootstrap-components.module';
import { ExtendedFormComponent } from './components/form-create/form-item-create/item-answer-create/extended-form/extended-form.component';
import { ExtendedFromViewComponent } from './components/form-view/form-item-view/extended-from-view/extended-from-view.component';
import { CreateNewComponent } from './components/form-view/form-item-view/extended-from-view/create-new/create-new.component';
import { StringViewPipe } from '../../pipes/string-view.pipe';
import { Select2Module } from 'ng4-select2';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    LbdModule,
    Select2Module,
    ReactiveFormsModule,
    BootstrapComponentsModule
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
    StringViewPipe,
    FormChartsComponent,
    ExtendedFormComponent,
    ExtendedFromViewComponent,
    CreateNewComponent
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

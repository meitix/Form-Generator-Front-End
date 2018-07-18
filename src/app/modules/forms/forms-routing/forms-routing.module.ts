import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent } from '../components/form-list/form-list.component';
import { FormResultsComponent } from '../components/form-results/form-results.component';
import { FormEditComponent } from '../components/form-edit/form-edit.component';
import { FormCreateComponent } from '../components/form-create/form-create.component';
import { FormStartComponent } from '../components/form-start/form-start.component';
import { FormViewComponent } from '../components/form-view/form-view.component';
import { FormUsersComponent } from '../components/form-users/form-users.component';
import { FormChartsComponent } from '../components/form-charts/form-charts.component';

const formRoutes: Routes = [
  {path: '', component: FormStartComponent,
      children: [
        {path: '' , component: FormListComponent},
        {path: 'create' , component: FormCreateComponent },
        {path: ':id', component: FormResultsComponent },
        {path: ':id/edit' , component: FormEditComponent},
        {path: ':id/view' , component: FormViewComponent},
        {path: ':id/users' , component: FormUsersComponent},
        {path: ':id/results' , component: FormResultsComponent},
        {path: ':id/charts' , component: FormChartsComponent},
        {path: ':id/results/edit' , component: FormViewComponent}
      ]},

];

@NgModule({
  imports: [CommonModule,
  RouterModule.forChild(formRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class FormsRoutingModule {}

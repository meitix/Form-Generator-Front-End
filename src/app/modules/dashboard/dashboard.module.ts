import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
      DashboardRoutingModule
    ],
    declarations: [HomeComponent, DashboardComponent ]
})

export class DashboardModule {}

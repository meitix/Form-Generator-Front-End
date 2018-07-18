import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormGeneratorModule} from './modules/forms/forms.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HttpModule } from '@angular/http';
import { MenuService } from './sidebar/menu.service';
import { AuthService } from './modules/authentication/services/auth.service';
import { LbdModule } from './modules/lbd/lbd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    FooterModule,
    NavbarModule,
    HttpModule,
    LbdModule
  ],
  providers: [MenuService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

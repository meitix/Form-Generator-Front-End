import { Component, OnInit, Input } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { MenuService } from './menu.service';
import { AuthService } from '../modules/authentication/services/auth.service';
import { User } from '../modules/users/models/user';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
 @Input() currentUser: User;
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.menuService.getSideForms().subscribe(res => {
        this.menuItems = this.menuItems.concat(res);
        $.getScript('../../assets/js/sidebar-moving-tab.js');
      });
    }
  }

}

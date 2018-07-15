import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


import { TadForm } from '../modules/forms/components/models/tad-form';
import { AuthService } from '../modules/authentication/services/auth.service';
import {  RouteInfo } from './sidebar.metadata';
import { HttpRequestResult } from '../models/http-request-result';
import { ServerConfig } from '../app-config/server-config';
@Injectable()
export class MenuService {

  serverUrl: string;

  constructor(
    private http: Http ,
    private authService: AuthService
  ) {
    this.serverUrl = ServerConfig.serverUrl;
  }

  getSideForms() {
    const user = this.authService.getCurrentUser();
   return this.http.get(this.serverUrl.concat('usersSideForms', '/' , user._id)).map(
      res => {
          const items = <TadForm[]> (<HttpRequestResult> res.json()).data;
          const menuItems: RouteInfo[] = [];
          for (let i = 0 ; i < items.length ; i++) {
            const form = items[i];
            menuItems.push( { path: '/forms/' + form._id + '/results' , title: form.title , icon: 'view_list' , class: '' });
          }
        return menuItems;
      }
    );
  }
}

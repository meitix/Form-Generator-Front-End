import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { HttpRequestResult } from '../../../models/http-request-result';
import { User } from '../models/user';
import { Roles } from '../seed-data/roles';
import { ServerConfig } from '../../../app-config/server-config';

@Injectable()
export class UserService {
  private serverUrl: string;

  constructor(private http: Http) {
    this.serverUrl = ServerConfig.serverUrl;
  }

  create(username: string, password: string) {
    return this.http
      .post(this.serverUrl.concat('createUser'), {
        username: username,
        password: password
      })
      .map(
        res => {
          return <HttpRequestResult>res.json();
        },
        err => {
          console.log(err);
        }
      );
  }

  getAllUsers() {
    return this.http.get(this.serverUrl.concat('getAllUsers')).map(
      res => {
        const reqRes = <HttpRequestResult> res.json();
        return <User[]> reqRes.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getUserById(id: string) {
    return this.http.get(this.serverUrl.concat('getUser', '/', id)).map(
        res => {
          const resData = <HttpRequestResult> res.json();
          return <User> resData.data;
        },
        err => {
          console.log(err);
        }
    );
  }

  getRoles(): string[] {
    return Roles;
  }

  search(username: string) {
    return this.http.get(this.serverUrl.concat('searchUsers', '/' , username)).map(
      res => {
        return <User[]> (<HttpRequestResult> res.json()).data;
      }
    );
  }


}

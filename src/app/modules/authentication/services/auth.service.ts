import { Injectable , EventEmitter} from '@angular/core';
import { User } from '../../users/models/user';
import { Http } from '@angular/http';
import { HttpRequestResult } from '../../../models/http-request-result';
import { ServerConfig } from '../../../app-config/server-config';

@Injectable()
export class AuthService {

  private currentUser: User;
  private serverUrl: string;


  constructor(private http: Http) {
    this.serverUrl = ServerConfig.serverUrl;
  }

  getCurrentUser(): User {
    const localUserStr = localStorage.getItem('currentUser');
    if (!localUserStr) {return null; }
    this.currentUser = JSON.parse(localUserStr);
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  login(username: string, password: string) {
    return this.http
      .post(this.serverUrl.concat('login'), {
        username: username,
        password: password
      })
      .map(
        res => {
          return <User>(<HttpRequestResult>res.json()).data;
        },
        err => {
          console.log(err);
        }
      );
  }

  register(username: string, password: string) {
    return this.http
      .post(this.serverUrl.concat('register'), {
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

  makeUserRemembered(user: User) {
    this.currentUser = user;
    localStorage.setItem('rememberedUser', JSON.stringify(user));
  }

  getRememberedUser(): User {
    const localUserStr = localStorage.getItem('rememberedUser');
    if (!localUserStr) { return null; }
    this.currentUser = JSON.parse(localUserStr);
    return this.currentUser;
  }

}

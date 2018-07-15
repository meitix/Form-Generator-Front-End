import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServerConfig } from '../../../app-config/server-config';
import { HttpRequestResult } from '../../../models/http-request-result';

@Injectable()
export class ResultService {

  private currentResult: any;

  constructor(private http: Http) {}

  getCurrentResult() {
    return this.currentResult;
  }

  setCurrentResult(result: any) {
    this.currentResult = result;
  }


  delete(result: any , formId: string) {
    return this.http.post(ServerConfig.serverUrl.concat('formResult/delete') , {resultId: result._id , formId}).map(
      res => {
        return <HttpRequestResult> res.json();
      }
    );
  }
}

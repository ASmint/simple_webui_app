
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseApi {
  private baseUrl = 'http://pbw0ap37.petersburg.ford.com/TEST34/hs/queryrunner/query';

  constructor(public http: HttpClient) {}

  private getUrl(url: string = '') {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  public post(url: string = '', data: any): Observable<any> {
    return this.http.post(this.getUrl(url), data);
  }

  public put(url: string = '', data: any): Observable<any> {
    return this.http.put(this.getUrl(url), data);
  }
}

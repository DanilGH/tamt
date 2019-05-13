import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class BaseApi {
  token = '1f2bbcef-d6ec-475b-be57-dc832fa56671';
  private baseUrl = 'http://intravision-task.test01.intravision.ru/odata/';
  private baseUrl2 = `http://intravision-task.test01.intravision.ru/api/${this.token}/Tasks`;

  constructor(public http: HttpClient) {
    if (environment.production) {
      this.baseUrl = 'http://165.22.241.110:3000/';
      console.log(this.baseUrl);
    }
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  private getUrl2(url: string = ''): string {
    return this.baseUrl2 + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url), {responseType: 'json', observe: 'body'});
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data, {responseType: 'json', observe: 'body'});
  }

  public post2(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl2(url), data, {responseType: 'json', observe: 'body'});
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data, {responseType: 'json', observe: 'body'});
  }
}

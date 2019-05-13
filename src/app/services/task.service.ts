import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../shared/core/base-api';

@Injectable()
export class TaskService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getTasks(): Observable<object> {
    return this.get('tasks');
  }

  updateTask(task = null): Observable<object> {
    return this.put(`tasks`, task);
  }
}

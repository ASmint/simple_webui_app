import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Tasks } from '../models/tasks.model';

@Injectable()
export class TasksService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  postTasks(data: any): Observable<Tasks[]> {
    return this.post('', data);
  }
}



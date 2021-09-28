import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentListService {

    apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getComments(): Observable<Comments> {
        return this.http.get<Comments>(this.apiUrl + '/comments');
    }
}

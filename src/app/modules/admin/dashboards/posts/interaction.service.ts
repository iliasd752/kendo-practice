import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Posts} from './posts';


@Injectable({
    providedIn: 'root'
})
export class InteractionService {
    apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Posts[]> {
        return this.http.get<Posts[]>(this.apiUrl + '/posts');
    }
}



import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photos} from './photos';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPhotoService {
apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

    getPhotos(): Observable<Photos> {
      return this.http.get<Photos>(this.apiUrl + 'photos');
    }
}

import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../../config/constants.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {
  }
  
  getData(): Observable<any> {
    return this.http.get(CONSTANTS.getData);
  }
  }


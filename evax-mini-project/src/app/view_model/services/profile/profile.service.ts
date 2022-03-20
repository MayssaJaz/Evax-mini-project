import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'src/config/constants.config';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }
  
  getProfile(id:string): Observable<any> {
    return this.http.get(CONSTANTS.getProfile+id);
  }
  }
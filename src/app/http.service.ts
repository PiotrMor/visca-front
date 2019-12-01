import { Injectable } from '@angular/core';

import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "http://localhost:8080/control"

  constructor(private http: HttpClient) {
   }


  sendCommand(command: string): Observable<any> {
    const params = command
    return this.http.post(this.url, params)
   }
}

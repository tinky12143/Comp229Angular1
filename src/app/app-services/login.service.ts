import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/login';  // backend server url

  constructor(private http: HttpClient) { }

  loginUser(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post<any>(this.url, credentials);
  }
}

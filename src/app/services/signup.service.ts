import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { SignUpResponse } from '../types/signup-response.type';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private httpClient: HttpClient) {}
  signup(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    return this.httpClient
      .post<SignUpResponse>('/signup', {
        name,
        email,
        password,
        confirmPassword,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('token', value.token);
          sessionStorage.setItem('username', value.name);
          sessionStorage.setItem('email', value.email);
          sessionStorage.setItem('password', value.password);
          sessionStorage.setItem('confirmPassword', value.confirmPassword);
        })
      );
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { SimpleUserResponse } from 'src/app/models/SimpleUserResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  async getUserDetails(userId: number): Promise<SimpleUserResponse> {
    return this.http.get<SimpleUserResponse>(`${environment.apiBaseUrl}/api/users/simple/${userId}`).toPromise();
  }
}
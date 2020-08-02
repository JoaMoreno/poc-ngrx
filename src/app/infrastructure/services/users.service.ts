import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/application/state/domain-state/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url= 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url)
  }

}

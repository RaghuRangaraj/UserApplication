import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from './user.models';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UsersService {

  constructor(private _httpClient: HttpClient) { }

  userUrl = 'assets/user.list.json';

  getUserData(): Observable<UserDetails[]> {
    return this._httpClient.get<UserDetails[]>(this.userUrl);
  }
  public editUserData(id?: string): any {
    return this._httpClient.get<UserDetails>(this.userUrl);
    // return this._httpClient.post<UserDetails>(this.userUrl, id, httpOptions);
  }
  public deleteUserData(id?: string): any {
    return this._httpClient.get<UserDetails>(this.userUrl);
    // return this._httpClient.post<UserDetails>(this.userUrl, id, httpOptions);
  }
  public addUserData(userDetails: UserDetails): Observable<UserDetails[]> {
    return this._httpClient.get<UserDetails[]>(this.userUrl);
    // return this._httpClient.post<UserDetails>(this.userUrl, userDetails, httpOptions);
  }

  public findUsers(id: string): Observable<Array<UserDetails>> {
    return this._httpClient.get<UserDetails[]>(this.userUrl);
    // return this._httpClient.post<UserDetails>(this.userUrl, id, httpOptions);
  }

}

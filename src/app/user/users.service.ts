import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Http, Response, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetails } from './user.models';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  public getUserData(): Observable<Array<UserDetails>> {
    return this._http.get('assets/user.list.json')
    .map((responseData: Response) => {
      return responseData.json();
    }, (error: any) => {
      console.log('error in fetching user details');
    });
  }
  public editUserData(id?: string): Observable<UserDetails> {
    return this._http.get('assets/user.list.json')
    // return this._http.post('assets/user.list.json',
    //   JSON.stringify(''), {
    //     headers: new Headers({
    //       'Content-type': 'application/json'
    //     })
    //   })
      .map((responseData: Response) => {
        return responseData.json();
      }, (error: any) => {
        console.log('error in editing user');
    });
  }
  public deleteUserData(id?: string): Observable<UserDetails> {
    return this._http.get('assets/user.list.json')
    // return this._http.post('assets/user.list.json',
    //   JSON.stringify(''), {
    //     headers: new Headers({
    //       'Content-type': 'application/json'
    //     })
    //   })
      .map((responseData: Response) => {
        return responseData.json();
      }, (error: any) => {
        console.log('error in editing user');
    });
  }
  public addUserData(userDetails: UserDetails): Observable<UserDetails> {
    return this._http.get('assets/user.list.json')
    // return this._http.post('assets/user.list.json',
    //   JSON.stringify(''), {
    //     headers: new Headers({
    //       'Content-type': 'application/json'
    //     })
    //   })
      .map((responseData: Response) => {
        return responseData.json();
      }, (error: any) => {
        console.log('error in editing user');
    });
  }

  public findUsers(id: string): Observable<Array<UserDetails>> {
    return this._http.get('assets/user.list.json')
    // return this._http.post('assets/user.list.json',
    //   JSON.stringify(''), {
    //     headers: new Headers({
    //       'Content-type': 'application/json'
    //     })
    //   })
      .map((responseData: Response) => {
        return responseData.json();
      }, (error: any) => {
        console.log('error in editing user');
    });
  }

}

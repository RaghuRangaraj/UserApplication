import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UsersService } from './users.service';
import { Router, NavigationExtras } from '@angular/router';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from './user.models';
import 'rxjs/add/observable/from'; 


export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [UsersService,
        BaseRequestOptions,
        { provide: Router, useClass: RouterStub},
        MockBackend,
        {provide : Http,
          useFactory: function (backend, defaultOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    })
    .compileComponents();
  }));

  const dummyTrueResponse: Array<UserDetails> = [{
    'id': '1',
    'name': 'name1',
    'surname': 'surname1',
    'birthDate': '28-9-1983',
    'phone': '812312312',
    'city': 'Warsaw',
    'street': 'Domaniewska',
    'number': '2'
  }];

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    usersService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling selectedUser', () => {
    const user = {
      id: '1',
      name: 'name1',
      surname: 'surname1',
      birthDate: '28-9-1983',
      phone: '812312312',
      city: 'Warsaw',
      street: 'Domaniewska',
      number: '2'
    };
    component.selectedUser(1, user);
    expect(component.selectedRow).toBe(1);
  });

  it('calling deleteSelectedUser', () => {
    component.selectedUserDetails = new UserDetails();
    component.selectedUserDetails.id = '1';
    spyOn(usersService, 'deleteUserData').and.callFake(function () {
      return Observable.from([dummyTrueResponse], null);
    });
    component.deleteSelectedUser();
  });
});

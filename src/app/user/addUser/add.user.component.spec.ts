import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add.user.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { MockBackend } from '@angular/http/testing';

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddUserComponent ],
      providers: [ UsersService,
        BaseRequestOptions,
        { provide: Router, useClass: RouterStub},
        MockBackend,
        {provide : Http,
          useFactory: function (backend, defaultOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

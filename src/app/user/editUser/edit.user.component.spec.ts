import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit.user.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}

export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = <Observable<any>>this.subject.asObservable();
  parent = <any>{};

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  const activatedRoute = new ActivatedRouteStub();
  activatedRoute.testParams = { id: '1'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditUserComponent ],
      providers: [ UsersService,
        BaseRequestOptions,
        { provide: ActivatedRoute, useValue: activatedRoute },
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
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

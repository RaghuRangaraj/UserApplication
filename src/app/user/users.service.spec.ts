import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MockBackend } from '@angular/http/testing';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService,
        BaseRequestOptions,
        MockBackend,
        {provide : Http,
          useFactory: function (backend, defaultOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});

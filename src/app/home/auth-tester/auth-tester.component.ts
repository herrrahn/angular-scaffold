import { Component, OnInit } from '@angular/core';
import {Token} from '../../auth/token';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth-tester',
  templateUrl: './auth-tester.component.html',
  styleUrls: ['./auth-tester.component.scss']
})
export class AuthTesterComponent implements OnInit {

  token: Token;
  // test$: Observable<string>;
  tokenValidity;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  requestToken() {
    this.authService.requestToken().subscribe( value => this.token = value);
  }

  refreshToken() {
    this.authService.refreshToken(this.token).subscribe( value => this.token = value);
  }

  writeToken(token: Token) {
    return JSON.stringify(token);
  }

  testToken() {
    this.authService.testToken(this.token).subscribe( value => {
      console.log('RRR');
      this.tokenValidity = value;
    });
  }
}

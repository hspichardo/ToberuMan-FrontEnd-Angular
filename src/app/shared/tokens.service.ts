import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from './http.service';
import {Role} from './role.model';


@Injectable()
export class TokensService {
  static END_POINT = '/auth';


  constructor(private httpService: HttpService) {
  }

  login(dni: string, password: string): Observable<any> {
    return this.httpService.login(dni, password, TokensService.END_POINT);
  }

  logout(): Date {
    return this.httpService.logout();
  }

  isAdmin(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().roles.includes(Role.ADMIN) : false;
  }

  isManager(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().roles.includes(Role.MANAGER) : false;
  }

  isOperator(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().roles.includes(Role.WAITER) : false;
  }

  isCousine(): boolean {
    return this.httpService.getToken() ? this.httpService.getToken().roles.includes(Role.COUSINE) : false;
  }

  getId(): string {
    return this.httpService.getToken() ? this.httpService.getToken().id : undefined;
  }

  getName(): string {
    return this.httpService.getToken() ? this.httpService.getToken().name : '???';
  }
}

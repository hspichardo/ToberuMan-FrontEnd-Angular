import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {MenuModel} from './menu.model';

@Injectable()
export class MenuService {

  constructor(private httpService: HttpService) {
  }
  create(menu: MenuModel): Observable<MenuModel> {
    return this.httpService.successful().post('/menu', menu);
  }
}

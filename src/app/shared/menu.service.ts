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
  readAll(): Observable<MenuModel[]> {
    return this.httpService.successful().get('/menu');
  }

  readOne(id: string): Observable<MenuModel> {
    return this.httpService.get('/menu' + '/' + id);
  }

  update(id: string, menu: MenuModel): Observable<MenuModel> {
    return this.httpService.put('/menu' + '/' + id, menu);
  }
  delete(menu: MenuModel): Observable<void> {
    return this.httpService.delete('/menu' + '/' + menu._id);
  }
}

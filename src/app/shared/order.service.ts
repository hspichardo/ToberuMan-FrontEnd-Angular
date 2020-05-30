import {Injectable} from '@angular/core';
import {HttpService} from './http.service'
import {Observable} from 'rxjs';
import {OrderModel} from './ordemodel';
import {MenuModel} from './menu.model';


@Injectable()
export class OrderService {
  constructor(private httpService: HttpService) {
  }
  create(order: OrderModel): Observable<OrderModel> {
    return this.httpService.successful().post('/order', order);
  }
  readAll(): Observable<OrderModel[]> {
    return this.httpService.successful().get('/order');
  }
  update(id: string, order: OrderModel): Observable<OrderModel> {
    return this.httpService.put('/order' + '/' + id, order);
  }
}

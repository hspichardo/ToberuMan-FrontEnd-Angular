import {Injectable} from '@angular/core';
import {HttpService} from './http.service'
import {Observable} from 'rxjs';
import {OrderModel} from './orderDetails.model';

@Injectable()
export class OrderService {
  constructor(private httpService: HttpService) {
  }
  create(order: OrderModel): Observable<OrderModel> {
    return this.httpService.successful().post('/order', order);
  }
}

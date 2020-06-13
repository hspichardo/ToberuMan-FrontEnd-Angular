import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {OrderModel} from '../../shared/order.model';
import {interval, Subscription } from 'rxjs';
import {TokensService} from '../../shared/tokens.service';

@Component({
  selector: 'app-overview',
  templateUrl: './cousine.component.html',
  styleUrls: ['./cousine.component.css']
})

export class CousineComponent implements OnInit {
  breakpoint: number;
  orders: OrderModel[];
  displayedColumns: string[] = ['name', 'amount'];
  subscription: Subscription;
  isWaiter: boolean;
  constructor(private orderService: OrderService, private tokenService: TokensService) {
    const source = interval(5000);
    this.isWaiter = tokenService.isOperator();
    this.subscription = source.subscribe(val => {
      this.orderService.readOrderForCousine().subscribe(
        data => {
          this.orders = data;
        }
      );
    });
  }
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }
  updateOrder(order: OrderModel) {
    order.tableid = order.table._id;
    console.log(order.orderLines);
    for (const orderline of order.orderLines) {
     orderline.menuid = orderline.menu._id;
    }
    this.orderService.update(order._id, order).subscribe(
      data => console.log('Orden lista!')
    );
  }
}

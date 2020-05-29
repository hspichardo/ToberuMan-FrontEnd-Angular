import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MenuService} from '../../shared/menu.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OrderService} from '../../shared/order.service';
import {OrderModel} from '../../shared/orderDetails.model';
import {OrderCreationDialogComponent} from '../../shared/order-creation-dialog.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  title = 'Orders management';
  columns = ['id', 'isReady', 'date'];
  data: OrderModel[];

  constructor(private dialog: MatDialog, private orderService: OrderService, private message: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  create() {
    this.dialog.open(OrderCreationDialogComponent, {
      width: '600px',
      data: {
        providerId: null
      }
    });

  }

  delete($event: any) {

  }

  read($event: any) {

  }

  update($event: any) {

  }
}


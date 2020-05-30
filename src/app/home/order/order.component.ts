import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MenuService} from '../../shared/menu.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OrderService} from '../../shared/order.service';
import {OrderModel} from '../../shared/ordemodel';
import {OrderCreationDialogComponent} from '../../shared/order-creation-dialog.component';
import {MenuModel} from '../../shared/menu.model';
import {MenuCreationDialogComponent} from '../menu/menu-creation-dialog.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  title = 'Orders management';
  columns = ['_id', 'isReady', 'date'];
  data: OrderModel[];
  private isEdit: boolean;

  constructor(private dialog: MatDialog, private orderService: OrderService, private message: MatSnackBar) {
      this.orderService.readAll().subscribe(
        data => {
          this.data = data;
          console.log(this.data);
        }
      );
  }

  ngOnInit(): void {
  }

  create() {
    this.dialog.open(OrderCreationDialogComponent, {
      width: '70%',
      data: {
        tableIn: null,
        isOverview: false,
        orderIn: null
      }
    }).afterClosed().subscribe(
      result => {
        this.orderService.readAll().subscribe(
          data => this.data = data
        );
      }
    );

  }

  delete($event: any) {

  }

  read($event: any) {

  }

  update(order: OrderModel){
    this.isEdit = true;
    this.dialog.open(OrderCreationDialogComponent,
      {
        width: '70%',
        data: {
          tableid: null,
          isEdit: this.isEdit,
          orderIn: order
        }
      }
    ).afterClosed().subscribe(
      result => {
        this.orderService.readAll().subscribe(
          data => this.data = data
        );
      }
    );
  }
}


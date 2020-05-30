import {Component, Inject} from '@angular/core';
import {OrderModel} from '../../shared/order.model';
import {OrderLineDetail} from '../../shared/OrderLineDetail.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../shared/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: 'order-detail-dialog.component.html'
})

export class OrderDetailDialogComponent {

  order: OrderModel = {_id: null, table: null, tableid: null, isReady: null, date: null, tableNumber: null, orderLines: []};
  provider: string;

  title = 'Order\'s Menus';
  columns = ['menuname', 'amount'];
  data: OrderLineDetail[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderDetailDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, @Inject(MAT_DIALOG_DATA) public orderData: any) {
    this.orderService.readOne(orderData.orderIn._id).subscribe(
      data => {
        this.order = data;
        this.data = [];
        for (const orderline of this.orderData.orderIn.orderLines) {
          const orderLine = {menuid: null, amount: null, menu: null, menuname: null};
          orderLine.menuid = orderline.menu._id;
          orderLine.amount = orderline.amount;
          orderLine.menuname = orderline.menu.name;
          this.data.push(orderLine);
          this.order.orderLines.push(orderLine);
        }
        this.order.tableNumber = data.table.number;
        this.order.table = data.table;
        this.provider = orderData.provider;
      }
    );
  }
}

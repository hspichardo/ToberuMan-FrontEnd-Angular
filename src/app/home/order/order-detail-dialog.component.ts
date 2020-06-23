import {Component, Inject} from '@angular/core';
import {OrderModel} from '../../shared/order.model';
import {OrderLineDetail} from '../../shared/OrderLineDetail.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../shared/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {InvoiceCreationDialogComponent} from '../../shared/incoice-creation.dialog.component';

@Component({
  templateUrl: 'order-detail-dialog.component.html'
})

export class OrderDetailDialogComponent {

  order: OrderModel = {_id: null, table: null, tableid: null, isReady: null, date: null, tableNumber: null, orderLines: []};
  provider: string;

  title = 'Order\'s Menus';
  columns = ['menuname', 'amount', 'price'];
  data: OrderLineDetail[];
  subtotal: number;
  tax: number;
  total: number;
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderDetailDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, @Inject(MAT_DIALOG_DATA) public orderData: any) {
    this.orderService.readOne(orderData.orderIn._id).subscribe(
      data => {
        this.order = data;
        this.data = [];
        this.subtotal = 0;
        for (const orderline of this.orderData.orderIn.orderLines) {
          const orderLine = {menuid: null, amount: null, menu: null, menuname: null, price: null};
          orderLine.menuid = orderline.menu._id;
          orderLine.amount = orderline.amount;
          orderLine.menuname = orderline.menu.name;
          orderLine.price = orderline.menu.price;
          this.data.push(orderLine);
          this.order.orderLines.push(orderLine);
          this.subtotal = this.subtotal + (orderLine.price * orderLine.amount);
        }
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
        this.subtotal = Math.round(this.subtotal * 100) / 100;
        this.total = Math.round(this.total * 100) / 100;
        this.tax = Math.round(this.tax * 100) / 100;
        this.order.tableNumber = data.table.number;
        this.order.table = data.table;
        this.provider = orderData.provider;
      }
    );
  }

  createInvoice() {
    this.dialog.open(InvoiceCreationDialogComponent, {
      width: '70%',
      data: {
        orderIn: this.order
      }
    }).afterClosed();
  }
}

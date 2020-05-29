import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {OrderService} from './order.service';
import {OrderModel} from './orderDetails.model';
import {OrderLineDetail} from './OrderLineDetail.model';
import {MenuModel} from './menu.model';
import {MenuService} from './menu.service';
import {Table} from './table.model';
import {TableService} from './table.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: 'order-creation-dialog.component.html'
})

export class OrderCreationDialogComponent {

  order: OrderModel = {_id: null, tableid: null, isReady: null, date: null, orderLines: []};
  orderLine: OrderLineDetail = {menuid: null, amount: null};
  isProviderNull: boolean;

  @Input() menuIn = '';
  @Output() menuOut = new EventEmitter<any>();
  menus: MenuModel[];
  comesFromOverview: boolean;
  title = 'Order\'s Menus';
  columns = ['menuid', 'amount'];
  data: OrderLineDetail[];
  tables: Table[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderCreationDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, private menuService: MenuService, private tableService: TableService,
              @Inject(MAT_DIALOG_DATA) public orderData: any) {
    this.order.tableid = orderData.tableid;
    this.comesFromOverview = orderData.isOverview;
    console.log(this.order.tableid);
    this.menuService.readAll().subscribe(
      data => this.menus = data
    );
    this.tableService.readAll().subscribe(
      data => this.tables = data
    );
  }

  createOrder() {
    if (this.isNotValid()) {
      return;
    }
    this.orderService.create(this.order).subscribe(
      data => {
        this.message.open('Order created: ' + data._id, null, {
          duration: 2000,
        });
        this.dialogRef.close();
      });
  }

  isNotValid(): boolean {
    return this.order.orderLines === undefined || this.order.orderLines .length === 0 || this.order.tableid === null;
  }

  empty(field: string): boolean {
    return field == null ||
      field === '';
  }

  onSelect(menu) {
    this.orderLine.menuid = menu._id;
  }

  addOrderLine() {
    this.order.orderLines.push({menuid: this.orderLine.menuid, amount: this.orderLine.amount});
    this.data = [...this.order.orderLines];
  }

  deleteOrderLine(orderLineDelete: OrderLineDetail) {
    const index = this.order.orderLines.findIndex(value => value.menuid === orderLineDelete.menuid);
    if (index > -1) {
      this.order.orderLines.splice(index, 1);
    }
    this.data = [...this.order.orderLines];
  }

}

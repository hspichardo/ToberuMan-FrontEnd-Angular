import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {OrderService} from './order.service';
import {OrderModel} from './ordemodel';
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

  order: OrderModel = {_id: null, table: null, tableid: null, isReady: null, date: null, orderLines: []};
  orderLine: OrderLineDetail = {menuid: null, amount: null, menu: null};
  isProviderNull: boolean;

  @Input() menuIn = '';
  @Output() menuOut = new EventEmitter<any>();
  menus: MenuModel[];
  comesFromOverview: boolean;
  title = 'Order\'s Menus';
  columns = ['menuid', 'amount'];
  data: OrderLineDetail[];
  tables: Table[];
  isEdit: boolean;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderCreationDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, private menuService: MenuService, private tableService: TableService,
              @Inject(MAT_DIALOG_DATA) public orderData: any) {
    if (orderData.orderIn !== null) {
      this.isEdit = true;
      this.order.tableid = orderData.orderIn.table._id;
      this.comesFromOverview = false;
      this.order.table = orderData.orderIn.table;
      this.order._id = orderData.orderIn._id;
      this.order.date = orderData.orderIn.date;
      this.order.isReady = orderData.orderIn.isReady;
      this.data = [];
      for (const orderline of this.orderData.orderIn.orderLines) {
        const orderLine = {menuid: null, amount: null, menu: null};
        orderLine.menuid = orderline.menu._id;
        orderLine.amount = orderline.amount;
        this.data.push(orderLine);
        this.order.orderLines.push(orderLine);
      }
    } else {
      this.isEdit = false;
      if (orderData.tableIn !== null) {
        this.order.tableid = orderData.tableIn._id;
      }
      this.comesFromOverview = orderData.isOverview;
    }
    this.menuService.readAll().subscribe(
      data => this.menus = data
    );
    this.tableService.readAll().subscribe(
      data => this.tables = data
    );
  }

  updateOrder() {
    if (this.isNotValid()) {
      return;
    }
    this.orderService.update(this.order._id, this.order).subscribe(
      data => {
        this.message.open('Order updated: ' + data._id, null, {
          duration: 2000,
        });
        this.dialogRef.close();
      });
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
    return this.order.orderLines === undefined || this.order.orderLines.length === 0 || this.order.tableid === null;
  }

  empty(field: string): boolean {
    return field == null ||
      field === '';
  }

  onSelectTable(table: Table) {
    this.order.tableid = table._id;
  }

  onSelect(menu: MenuModel) {
    this.orderLine.menuid = menu._id;
  }

  addOrderLine() {
    this.order.orderLines.push({menuid: this.orderLine.menuid, amount: this.orderLine.amount, menu: this.orderLine.menu});
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

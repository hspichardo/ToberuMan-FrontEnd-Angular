import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MenuService} from '../../shared/menu.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OrderService} from '../../shared/order.service';
import {OrderModel} from '../../shared/ordemodel';
import {OrderCreationDialogComponent} from '../../shared/order-creation-dialog.component';
import {CancelYesDialogComponent} from '../../shared/cancel-yes-dialog.component';
import {take} from 'rxjs/operators';



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

  delete(order: OrderModel): void {
    this.dialog.open(CancelYesDialogComponent).afterClosed().pipe(take(1)).subscribe((shouldDelete: boolean) => {
      if (shouldDelete) {
        this.orderService.delete(order).subscribe(() => {
            this.message.open('Order deleted successfully', null, {
              duration: 2000,
            });
            this.orderService.readAll().subscribe(
              data => this.data = data
            );
          }
        );
      }
    }, (error) => console.log(error), () => {
    });
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


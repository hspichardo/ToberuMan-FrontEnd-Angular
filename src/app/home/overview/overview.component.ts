import {Component, OnInit} from '@angular/core';
import {TokensService} from '../../shared/tokens.service';
import {Router} from '@angular/router';
import {TableService} from '../../shared/table.service';
import {Table} from '../../shared/table.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OrderCreationDialogComponent} from '../../shared/order-creation-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  breakpoint: number;
  tables: Table[];
  constructor(private tableService: TableService, router: Router, private dialog: MatDialog, private message: MatSnackBar) {
   this.tableService.readAll().subscribe(
     data => {
       this.tables = data;
       console.log(this.tables);
     }
   );
  }
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  createOrder(table: Table) {
    this.dialog.open(OrderCreationDialogComponent, {
      width: '70%',
      data: {
        isOverview: true,
        tableIn: table,
        orderIn: null
      }
    });

  }
  updateTableTakenState(table: Table) {
    table.isTaken = !table.isTaken;
    table.reservationDate = new Date();
    this.tableService.update(table._id, table).subscribe(
      next => {}
    );
  }
}

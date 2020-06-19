import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Table} from '../../shared/table.model';
import {TableService} from '../../shared/table.service';

@Component({
  templateUrl: 'table-detail-dialog.component.html'
})

export class TableDetailDialogComponent {
  table: Table = {
    _id: null,
    number: null,
    capacity: null,
    isTaken: false,
    isReserved: false,
    reservationDate: new Date()
  };
  color = 'warn';

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<TableDetailDialogComponent>,
              private message: MatSnackBar, private tableService: TableService) {
    this.tableService.readOne(data.id).subscribe(
      table => {
        this.table = table;
        console.log(table);
      }
    );
  }
}

import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MenuModel} from '../../shared/menu.model';
import {MenuService} from '../../shared/menu.service';
import {Table} from '../../shared/table.model';
import {TableService} from '../../shared/table.service';


@Component({
  styleUrls: ['table-creation-dialog.component.css'],
  templateUrl: 'table-creation-dialog.component.html'
})

export class TableCreationDialogComponent {
  newTable: Table = {
    _id: null,
    number: null,
    capacity: null,
    isTaken: false,
    isReserved: false,
    reservationDate: new Date()
  };
  editMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<TableCreationDialogComponent>,
              private message: MatSnackBar, private tableService: TableService) {
    this.editMode = data.isEdit;
    if (data.isEdit) {
      this.tableService.readOne(data.id).subscribe(
        table => this.newTable = table
      );
    }
  }

  createTable() {
    this.tableService.create(this.newTable).subscribe(
      () => {
        this.dialog.closeAll();
      }
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Menu created successfully', null, {
        duration: 2000,
      })
    );
  }

  updateTable() {
    this.tableService.update(this.newTable._id, this.newTable).subscribe(
      (data) => {
        this.newTable = data;
        this.dialog.closeAll();
      }
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Menu updated successfully', null, {
        duration: 2000,
      })
    );
  }
  isvalid(): boolean {
    return this.newTable.capacity != null;
  }
}

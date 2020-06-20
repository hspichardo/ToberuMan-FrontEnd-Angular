import {Component, OnInit} from '@angular/core';
import {Table} from '../../shared/table.model';
import {TableService} from '../../shared/table.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokensService} from '../../shared/tokens.service';
import {TableCreationDialogComponent} from './table-creation-dialog.component';
import {TableDetailDialogComponent} from './table-detail-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables: Table[];
  isAdmin: boolean;
  isWaiter: boolean;
  title = 'Tables management';
  columns = ['number', 'capacity', 'isTaken'];
  private isEdit: boolean;

  ngOnInit(): void {
  }

  constructor(private tableService: TableService, private tokensService: TokensService,
              router: Router, private dialog: MatDialog, private message: MatSnackBar) {
    this.isAdmin = this.tokensService.isAdmin();
    this.isWaiter = this.tokensService.isOperator();
    this.tableService.readAll().subscribe(
      data => {
        this.tables = data;
      }
    );
  }

  create() {
    this.isEdit = false;
    this.dialog.open(TableCreationDialogComponent,
      {
        width: '500px',
        data: {
          isEdit: this.isEdit
        }
      }
    ).afterClosed().subscribe(
      result => {
        this.tableService.readAll().subscribe(
          data => this.tables = data
        );
      }
    );
  }

  delete($event: any) {
      }

  read(table: Table) {
    this.dialog.open(TableDetailDialogComponent,
      {
        width: '400px',
        data: {
          id: table._id
        }
      }
    );
  }

  update(table: Table) {
    this.isEdit = true;
    this.dialog.open(TableCreationDialogComponent,
      {
        width: '500px',
        data: {
          id: table._id,
          isEdit: this.isEdit
        }
      }
    ).afterClosed().subscribe(
      result => {
        this.tableService.readAll().subscribe(
          data => this.tables = data
        );
      }
    );
  }
}

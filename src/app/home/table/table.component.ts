import {Component, OnInit} from '@angular/core';
import {Table} from '../../shared/table.model';
import {TableService} from '../../shared/table.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokensService} from '../../shared/tokens.service';

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

  }

  delete($event: any) {
      }

  read($event: any) {

  }

  update($event: any) {

  }
}

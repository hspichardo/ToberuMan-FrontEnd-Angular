import { Component, OnInit } from '@angular/core';
import {MenuModel} from '../../shared/menu.model';
import {MenuCreationDialogComponent} from './menu-creation-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuModel;
  title = 'Administración de Menús';
  columns = ['name', 'description', 'price'];
  data: MenuModel[];
  isEdit: boolean;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  create() {
    this.isEdit = false;
    this.dialog.open(MenuCreationDialogComponent,
      {
        width: '500px',
        data: {
          isEdit: this.isEdit
        }
      }
    ).afterClosed().subscribe(
      result => {
        // this.search();
      }
    );


  }

  update($event: any){

  }
  delete() {

  }

  read($event: any) {

  }
}

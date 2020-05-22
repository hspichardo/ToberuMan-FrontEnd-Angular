import { Component, OnInit } from '@angular/core';
import {MenuModel} from '../../shared/menu.model';
import {MenuCreationDialogComponent} from './menu-creation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MenuService} from '../../shared/menu.service';
import {MenuDetailDialogComponent} from './menu-detail-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuModel;
  title = 'Administración de Menús';
  columns = ['name', 'description', 'price', 'menuType'];
  data: MenuModel[];
  isEdit: boolean;
  constructor(private dialog: MatDialog, private menuService: MenuService) {
    this.menuService.readAll().subscribe(
      data => {
        this.data = data;
      }
    );
  }

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
        this.menuService.readAll().subscribe(
          data => this.data = data
        );
      }
    );


  }

  update(menu: MenuModel){
    this.isEdit = true;
    this.dialog.open(MenuCreationDialogComponent,
      {
        width: '500px',
        data: {
          id: menu._id,
          isEdit: this.isEdit
        }
      }
    ).afterClosed().subscribe(
      result => {
        this.menuService.readAll().subscribe(
          data => this.data = data
        );
      }
    );
  }
  delete() {

  }

  read(menu: MenuModel) {
    // TODO
    console.log(menu);
    this.dialog.open(MenuDetailDialogComponent,
      {
        width: '400px',
        data: {
          id: menu._id
        }
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {MenuModel} from '../../shared/menu.model';
import {MenuCreationDialogComponent} from './menu-creation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MenuService} from '../../shared/menu.service';
import {MenuDetailDialogComponent} from './menu-detail-dialog.component';
import {CancelYesDialogComponent} from '../../shared/cancel-yes-dialog.component';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuModel;
  title = 'Menu Management';
  columns = ['name', 'description', 'price', 'menuType'];
  data: MenuModel[];
  isEdit: boolean;
  constructor(private dialog: MatDialog, private menuService: MenuService, private message: MatSnackBar) {
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
   delete(menu: MenuModel): void {
    this.dialog.open(CancelYesDialogComponent).afterClosed().pipe(take(1)).subscribe((shouldDelete: boolean) => {
      if (shouldDelete) {
        this.menuService.delete(menu).subscribe(() => {
            this.message.open('Menu updated successfully', null, {
              duration: 2000,
            });
            this.menuService.readAll().subscribe(
              data => this.data = data
            );
          }
          );
      }
    }, (error) => console.log(error), () => {
    });
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

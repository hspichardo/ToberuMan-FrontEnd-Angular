import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MenuModel} from '../../shared/menu.model';


@Component({
  styleUrls: ['menu-creation-dialog.component.css'],
  templateUrl: 'menu-creation-dialog.component.html'
})

export class MenuCreationDialogComponent {
  newMenu: MenuModel = {
    id: null,
    name: null,
    description: null,
    price: null,
    menuType: null,
    isAviable: false
  };
  editMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<MenuCreationDialogComponent>,
              private message: MatSnackBar) {
    this.editMode = data.isEdit;
    if (data.isEdit) {
      /*this.menuService.readOne(data.code).subscribe(
        article => this.newArticle = article
      );*/
    }
  }

  createMenu() {
    /*
    this.menuService.create(this.newMenu).subscribe(
      () => {
        this.dialog.closeAll();
      }
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Menu created successfully', null, {
        duration: 2000,
      })
    );*/
  }

  updateMenu() {
    /*
    this.menuService.update(this.newMenu.id, this.newMenu).subscribe(
      (data) => {
        this.newMenu = data;
        this.dialog.closeAll();
      }
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Menu updated successfully', null, {
        duration: 2000,
      })
    );*/
  }
  isvalid(): boolean {
    return this.newMenu.description != null && this.newMenu.name != null && this.newMenu.price !== 0;
  }
}
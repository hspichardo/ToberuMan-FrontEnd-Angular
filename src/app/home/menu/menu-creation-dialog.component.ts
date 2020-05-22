import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MenuModel} from '../../shared/menu.model';
import {MenuService} from '../../shared/menu.service';


@Component({
  styleUrls: ['menu-creation-dialog.component.css'],
  templateUrl: 'menu-creation-dialog.component.html'
})

export class MenuCreationDialogComponent {
  newMenu: MenuModel = {
    _id: null,
    name: null,
    description: null,
    price: null,
    menuType: null,
    isAviable: false
  };
  editMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<MenuCreationDialogComponent>,
              private message: MatSnackBar, private menuService: MenuService) {
    this.editMode = data.isEdit;
    if (data.isEdit) {
      this.menuService.readOne(data.id).subscribe(
        menu => this.newMenu = menu
      );
    }
  }

  createMenu() {
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
    );
  }

  updateMenu() {
    this.menuService.update(this.newMenu._id, this.newMenu).subscribe(
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
    );
  }
  isvalid(): boolean {
    return this.newMenu.description != null && this.newMenu.name != null && this.newMenu.price.$numberDecimal !== 0;
  }
}

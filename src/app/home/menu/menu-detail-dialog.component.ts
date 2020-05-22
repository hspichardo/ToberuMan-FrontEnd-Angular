import {Component, Inject} from '@angular/core';
import {MenuModel} from '../../shared/menu.model';
import {MenuService} from '../../shared/menu.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: 'menu-detail-dialog.component.html'
})

export class MenuDetailDialogComponent {
  menu: MenuModel = {
    _id: null,
    name: null,
    description: null,
    price: null,
    menuType: null,
    isAviable: null,
  };
  color = 'warning';

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<MenuDetailDialogComponent>,
              private message: MatSnackBar, private menuService: MenuService) {
    this.menuService.readOne(data.id).subscribe(
      menu => this.menu = menu
    );
  }
}

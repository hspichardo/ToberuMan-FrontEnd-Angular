import { Component, OnInit } from '@angular/core';
import {MenuModel} from '../../shared/menu.model';

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
  constructor() { }

  ngOnInit(): void {
  }

  create() {

  }

  update($event: any){

  }
  delete() {

  }

  read($event: any) {

  }
}

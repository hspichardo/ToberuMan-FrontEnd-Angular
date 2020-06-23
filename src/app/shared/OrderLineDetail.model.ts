import {MenuModel} from './menu.model';

export interface OrderLineDetail {
  menuid: string;
  menuname: string;
  amount: number;
  price: number;
  menu: MenuModel;
}

import {MenuModel} from './menu.model';

export interface OrderLineDetail {
  menuid: string;
  amount: number;
  menu: MenuModel;
}

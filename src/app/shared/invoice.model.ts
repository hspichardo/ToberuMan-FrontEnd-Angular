import {OrderModel} from './order.model';

export class Invoice {
  _id?: string;
  number?: number;
  order: OrderModel;
  idorder: string;
  emailrecipient: string;
}

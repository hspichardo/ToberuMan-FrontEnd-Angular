import {OrderLineDetail} from './OrderLineDetail.model';

export interface OrderModel {
  _id: string;
  tableid: string;
  isReady: boolean;
  date: Date;
  orderLines: OrderLineDetail[];
}

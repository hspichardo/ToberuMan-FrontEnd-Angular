import {OrderLineDetail} from './OrderLineDetail.model';

export interface OrderModel {
  id: string;
  tableid: string;
  isReady: boolean;
  date: Date;
  orderLines: OrderLineDetail[];
}

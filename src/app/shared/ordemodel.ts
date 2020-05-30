import {OrderLineDetail} from './OrderLineDetail.model';
import {Table} from './table.model';

export interface OrderModel {
  _id: string;
  tableid: string;
  table: Table;
  isReady: boolean;
  date: Date;
  orderLines: OrderLineDetail[];
}

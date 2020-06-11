import {Invoice} from './invoice.model';
import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class InvoiceService {
  constructor(private httpService: HttpService) {
  }
  create(invoice: Invoice): Observable<any> {
    return this.httpService.pdf().post('/invoice', invoice);
  }
  readAll(): Observable<Invoice[]> {
    return this.httpService.successful().get('/invoice');
  }
  printInvoice(invoice: Invoice): Observable<any> {
    return this.httpService.pdf().get('/invoice/' + invoice._id);
  }
}

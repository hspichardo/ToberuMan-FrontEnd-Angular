import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokensService} from '../../shared/tokens.service';
import {InvoiceService} from '../../shared/invoice.service';
import {OrderModel} from '../../shared/order.model';
import {Invoice} from '../../shared/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
  title = 'Invoices';
  columns = ['_id', 'number', 'total'];
  data: Invoice[];
  constructor(private message: MatSnackBar,
              private tokenService: TokensService, private invoiceService: InvoiceService) {
      this.invoiceService.readAll().subscribe(
        data => this.data = data
      );
  }
  ngOnInit(): void {
  }

  print(invoice: Invoice): void {
    this.invoiceService.printInvoice(invoice).subscribe(
      data => {}
    );
  }
}

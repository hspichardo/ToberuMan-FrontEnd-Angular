import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Invoice} from './invoice.model';
import {InvoiceService} from './invoice.service';


@Component({
  templateUrl: 'invoice-creation-dialog.component.html'
})

export class InvoiceCreationDialogComponent {
  newInvoice: Invoice = {
    _id: null,
    number: null,
    order: null,
    emailrecipient: null,
    idorder: null
  };

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<InvoiceCreationDialogComponent>,
              private message: MatSnackBar, private invoiceService: InvoiceService) {
    this.newInvoice.order = data.orderIn;
    this.newInvoice.idorder = this.newInvoice.order._id;
  }

  createInvoice() {
    this.invoiceService.create(this.newInvoice).subscribe(
      () => {
        this.dialog.closeAll();
      }
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Menu created successfully', null, {
        duration: 2000,
      })
    );
  }
  isvalid(): boolean {
    return this.newInvoice.emailrecipient !== null;
  }
}

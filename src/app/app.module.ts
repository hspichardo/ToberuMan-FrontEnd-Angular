import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {SidebarModule} from 'ng-sidebar';
import {MatMenuModule} from '@angular/material/menu';
import {TokensService} from './shared/tokens.service';
import {HttpService} from './shared/http.service';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CrudComponent} from './shared/crud.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {AppMaterialModule} from './app-material.module';
import { MenuComponent } from './home/menu/menu.component';
import {MenuCreationDialogComponent} from './home/menu/menu-creation-dialog.component';
import {MenuService} from './shared/menu.service';
import {CdkTableModule} from '@angular/cdk/table';
import {MenuDetailDialogComponent} from './home/menu/menu-detail-dialog.component';
import {CancelYesDialogComponent} from './shared/cancel-yes-dialog.component';
import {OverviewComponent} from './home/overview/overview.component';
import {TableService} from './shared/table.service';
import {OrderComponent} from './home/order/order.component';
import {OrderService} from './shared/order.service';
import {OrderCreationDialogComponent} from './shared/order-creation-dialog.component';
import {OrderDetailDialogComponent} from './home/order/order-detail-dialog.component';
import {InvoiceService} from './shared/invoice.service';
import {InvoiceCreationDialogComponent} from './shared/incoice-creation.dialog.component';
import {InvoiceComponent} from './home/invoice/invoice.component';
import {CousineComponent} from './home/cousine/cousine.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CrudComponent,
    MenuComponent,
    MenuCreationDialogComponent,
    MenuDetailDialogComponent,
    CancelYesDialogComponent,
    OverviewComponent,
    OrderComponent,
    OrderCreationDialogComponent,
    OrderDetailDialogComponent,
    InvoiceCreationDialogComponent,
    InvoiceComponent,
    CousineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarModule.forRoot(),
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    AppMaterialModule,
    CdkTableModule
  ],
  providers: [
    TokensService,
    HttpService,
    MatSnackBar,
    MenuService,
    TableService,
    OrderService,
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

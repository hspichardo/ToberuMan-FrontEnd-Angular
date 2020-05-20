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


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CrudComponent,
    MenuComponent
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
    AppMaterialModule
  ],
  providers: [
    TokensService,
    HttpService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
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
    HttpClientModule
  ],
  providers: [
    TokensService,
    HttpService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

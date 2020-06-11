import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './home/menu/menu.component';
import {OverviewComponent} from './home/overview/overview.component';
import {OrderComponent} from './home/order/order.component';
import {InvoiceComponent} from './home/invoice/invoice.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'menu', component: MenuComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'order', component: OrderComponent},
      {path: 'invoice', component: InvoiceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

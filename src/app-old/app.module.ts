import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataService } from './services/data.service';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent, 
    ProductDetailComponent, 
    ProductSaleComponent,
    WelcomeComponent
  ], //component registration Section
  imports: [
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot([
      {path:'', component: WelcomeComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'product', component: ProductListComponent},
      {path: 'sales', component: ProductSaleComponent},
      {path:'product/:id', component: ProductDetailComponent}
    ], {useHash:true})
  ], //Angular Module Section
  providers: [DataService],      //Angular Service Section
  bootstrap: [AppComponent] //Angular starting component
})
export class AppModule { }

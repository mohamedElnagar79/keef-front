import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { CoreModule } from './core/core.module';
import { SignUpModule } from './core/sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { SignInModule } from './core/sign-in/sign-in.module';
import { AdminSignUpModule } from './core/admin-sign-up/admin-sign-up.module';
import { ProductsModule } from './components/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './components/cart/cart.module';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [AppComponent, OrderComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    SignUpModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SignInModule,
    AdminSignUpModule,
    ProductsModule,
    CartModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

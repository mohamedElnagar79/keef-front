import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { CoreModule } from './core/core.module';
import { SignUpModule } from './core/sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    SignUpModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.routes';
import { SliderComponent } from './slider/slider.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent, SliderComponent, ProductsCardComponent],
  imports: [CommonModule, HomeRoutingModule, MatProgressSpinnerModule],
  exports: [HomeComponent],
})
export class HomeModule {}

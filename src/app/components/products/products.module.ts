import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInfoRoutingModule } from './products-routing.routes';
import { ProductsComponent } from './products.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsInfoRoutingModule, MatProgressSpinnerModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}

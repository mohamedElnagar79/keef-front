import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInfoRoutingModule } from './products-routing.routes';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsInfoRoutingModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}

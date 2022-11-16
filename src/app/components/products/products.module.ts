import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInfoRoutingModule } from './products-routing.routes';
import { ProductsComponent } from './products.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsInfoRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}

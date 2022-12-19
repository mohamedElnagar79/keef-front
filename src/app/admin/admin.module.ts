import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRoutingModule } from './admin-routing.routes';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    ProfileComponent,
    ProductInfoComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}

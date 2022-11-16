import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // isAuth: boolean = false;
  currentOrders: [] = this.order.cartOrders;
  isAuth: boolean = this.elogin.isAuthenticated;
  orderNum: number = this.order.cartOrders.length;

  constructor(private elogin: LoginService, private order: CartService) {}

  ngOnInit(): void {
    console.log('auth now', this.isAuth);
    console.log('order lenght', this.order.cartOrders);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    SignUpComponent,
    AdminSignUpComponent,
    SignInComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [CommonModule],
  exports: [
    SignUpComponent,
    AdminSignUpComponent,
    SignInComponent,
    FooterComponent,
    NavBarComponent,
  ],
})
export class CoreModule {}

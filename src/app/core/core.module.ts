import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AdminSignUpComponent,
    SignInComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [CommonModule, SignUpModule],
  exports: [
    AdminSignUpComponent,
    SignInComponent,
    FooterComponent,
    NavBarComponent,
  ],
})
export class CoreModule {}

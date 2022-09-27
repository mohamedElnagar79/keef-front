import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminSignUpComponent, FooterComponent, NavBarComponent],
  imports: [CommonModule, SignUpModule, RouterModule],
  exports: [AdminSignUpComponent, FooterComponent, NavBarComponent],
})
export class CoreModule {}

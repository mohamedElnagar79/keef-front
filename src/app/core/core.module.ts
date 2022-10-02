import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { RouterModule } from '@angular/router';
import { AdminSignUpModule } from './admin-sign-up/admin-sign-up.module';

@NgModule({
  declarations: [FooterComponent, NavBarComponent],
  imports: [CommonModule, SignUpModule, AdminSignUpModule, RouterModule],
  exports: [FooterComponent, NavBarComponent],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminSignUpRoutingModule } from './adminSignUp-routing.routes';
import { AdminSignUpComponent } from './admin-sign-up.component';

@NgModule({
  declarations: [AdminSignUpComponent],
  imports: [CommonModule, AdminSignUpRoutingModule, FormsModule],
})
export class AdminSignUpModule {}

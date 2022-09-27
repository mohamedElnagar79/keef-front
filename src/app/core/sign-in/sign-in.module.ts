import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './signIn-routing.routes';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, FormsModule],
})
export class SignInModule {}

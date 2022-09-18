import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSignUpComponent } from './admin-sign-up.component';
const routes: Routes = [
  {
    path: '',
    component: AdminSignUpComponent,
    data: { title: 'adminSignUp' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSignUpRoutingModule {}

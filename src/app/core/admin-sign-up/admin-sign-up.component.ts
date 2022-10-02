import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/_models/admin';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss'],
})
export class AdminSignUpComponent implements OnInit {
  admin: Admin = new Admin('', '', '', '', '');
  constructor(
    private adminSer: AdminService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}

  ngOnInit(): void {}
  save() {
    this.adminSer.addservice(this.admin).subscribe((a) => {
      this.router.navigateByUrl('signIn');
    });
    console.log('clicked');
  }
}

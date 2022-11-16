import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/_models/login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  login: Login = new Login('', '');
  loginFlag: boolean = false;
  constructor(
    private elogin: LoginService,
    private ac: ActivatedRoute,
    private root: Router,
    public router: Router
  ) {}

  ngOnInit(): void {}
  loginSubmit(f: NgForm) {
    if (f.valid) {
      // this.root.navigateByUrl("/students")
      this.elogin.addservice(this.login).subscribe(
        (a) => {
          console.log(' you now log in=====>', a);
          this.elogin.isAuthenticated === true,
            (this.loginFlag = false),
            this.router.navigateByUrl('/home');
        },
        (e) => {
          this.loginFlag = true;
          this.elogin.isAuthenticated === false;
          throw new Error('invalid Email or Password');
          // console.log('error=====>', e.error.data);
        }
      );
      f.reset();
    }
  }
}

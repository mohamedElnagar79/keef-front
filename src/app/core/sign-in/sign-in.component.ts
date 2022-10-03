import { Component, OnInit } from '@angular/core';
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
  loginSubmit() {
    // this.root.navigateByUrl("/students")
    this.elogin.addservice(this.login).subscribe(
      (a) => {
        console.log('=====>', a);
        (this.loginFlag = false), this.router.navigateByUrl('/home');
      },
      (e) => {
        console.log('error=====>', e.error.data);
        this.loginFlag = true;
        this.login.email = '';
        this.login.password = '';
      }
    );
  }
}

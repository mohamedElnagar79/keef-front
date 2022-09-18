import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:User =new User("","","","","")
  constructor(private euser:UserService,private ac:ActivatedRoute,private root:Router) {}

  ngOnInit(): void {
  }
  save(){
    // this.root.navigateByUrl("/students")
    this.euser.addservice(this.user).subscribe(a=>{

      console.log("=====>" ,a);
      })
  }
}

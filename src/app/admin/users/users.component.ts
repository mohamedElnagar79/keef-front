import { Component, OnInit } from '@angular/core';
import { UsersService } from '../adminServices/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(public UserSer: UsersService) {}
  deleteUser(id: number, i: number) {
    this.UserSer.deleteUserByID(id).subscribe((data) => {
      this.users.splice(i, 1);
      console.log('deleted');
    });
  }
  ngOnInit(): void {
    this.UserSer.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}

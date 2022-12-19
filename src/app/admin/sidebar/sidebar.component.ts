import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  active: string =
    this.ac.snapshot.firstChild?.routeConfig?.path != ''
      ? String(this.ac.snapshot.firstChild?.routeConfig?.path)
      : 'profile';
  constructor(private ac: ActivatedRoute) {}
  setActive(name: string) {
    return (this.active = name);
  }
  isActive(name: string) {
    return this.active === name;
  }
  ngOnInit(): void {
    console.log('params ', this.active);
    console.log('params ', this.ac.snapshot.firstChild?.routeConfig);
  }
}

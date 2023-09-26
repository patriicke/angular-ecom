import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {NavbarComponent} from './../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user = NavbarComponent.userType;
  currentPage: string | undefined;
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.currentPage = val.url;
      }
    });
  }
  ngOnInit(): void {
  }

}

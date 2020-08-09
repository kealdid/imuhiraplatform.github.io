import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
    label: "Home",
    icon: 'home',
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true

  },
  {
    label: 'About us',
    icon:'help',
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
    label:'Join us',
    icon:'login',
    showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
  }]
  constructor() { }

  ngOnInit() {
  }

}

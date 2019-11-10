import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Gallery',
      url: '/menu/gallery',
      icon: 'logo-ionic'
    },
    {
      title: 'login',
      url: '/menu/login',
      icon: 'logo-google'
    },
    {
      title: 'profile',
      url: '/menu/profile',
      icon: 'logo-google'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

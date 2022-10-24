import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notificationCounter = 7;
  logo_principal = './assets/logo_principal.svg';
  profile1 = './assets/profile1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

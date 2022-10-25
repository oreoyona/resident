import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  posts = this.data.data;

  profile2 = "./assets/profile2.jpg";
  profile3 = "./assets/profile3.jpg";
  profile4 = "./assets/profile4.jpg";

  
  constructor(private data: AuthService) {}
}

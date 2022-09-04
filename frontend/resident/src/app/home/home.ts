import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = 'resident';
  }
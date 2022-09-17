import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { BreakpointObserver } from "@angular/cdk/layout"
@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        LoginComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'resident';
    startMessage = "Commencer";
    onMobile = true;
    page1 = true;
    page2 = false;
    page3 = false;
    showForm = false;

    /**
     * changeBreakpoint - change the view according to the breakpoint
     * @param value : a boolean to check wether we have reached 800px
     */
    changeBreakPoint = (value: boolean) => {
        value? this.onMobile = false: this.onMobile = true;
    }

    /**
     * changeToPage1 - change the value of page1 to true
     * the classes on the view will be updated accordingly
     * Return: void
     */
    changeToPage1 = () => {
        this.page3 = false;
        this.page1 = true;
        setTimeout(this.changeToPage2, 6000);
    }

    /**
     * changeToPage2 - change the value of page2 to true
     * the classes on the view will be updated accordingly
     * Return: void
     */
    changeToPage2 = () => {
        this.page1 = false;
        this.page2 = true;
        setTimeout(this.changeToPage3, 6000);
    }

    /**
     * changeToPage2 - change the value of page3 to true
     * the classes on the view will be updated accordingly
     * Return: void
     */
    changeToPage3 = () => {
        this.page2 = false;
        this.page3 = true;
        setTimeout(this.changeToPage1, 6000);
    }

    constructor(public breakpointObserver: BreakpointObserver) {
        const isLargeScreen = breakpointObserver.isMatched('(min-width: 800px)');
        this.changeBreakPoint(isLargeScreen);

    }





    ngOnInit(): void {
        setTimeout(this.changeToPage2, 6000);
    }

}
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    selector: "login",
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        CommonModule
    ],
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent{


    startMessage = "Bonjour";
    visible = false;

    /**
     * changeVisibility - chsnge the visibility of the password
     */
    changeVisibility() {
        this.visible = !this.visible;
    }

    /**
     * getStartMessage - return a greeting message
     * Depending on the hour
     * @param hour The current hour  
     */
    getStartMessage = (hour: number) => {
        hour < 16?  this.startMessage = "Bonjour": this.startMessage = "Bonsoir" 
    }



    constructor(){
        const date = new Date();
        const hour = date.getHours();
        this.getStartMessage(hour);
    }

}
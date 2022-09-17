import { Component } from "@angular/core"
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
    standalone: true,
    selector: "login",
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent{
    startMessage = "Bonjour";


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
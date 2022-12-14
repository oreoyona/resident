import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox'
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../common/services/auth.service";

@Component({
    standalone: true,
    selector: "login",
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnDestroy{


    startMessage = "Bonjour";
    visible = false;
    inscription = false;


    connexionForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })

    inscriptionForm = new FormGroup({
        email: new FormControl(''),
        nom: new FormControl(''),
        mdp: new FormGroup(
            {
                password: new FormControl(''),
                password2: new FormControl('')
            }
        )
    });

    /**
     * newUser - register a new user to the application
     * @param value : the infromations about the new user 
     */
    newUser = (value: any) =>{
        console.log(value)
    }

    
    /**
     * - connexion: makes an HTTP request to login the user
     * @value : the object containg the credentials of the user
     */
    connexion = (value: any) => {
        this.auth.login(value).subscribe( res => {
            console.log(res)
        })
     
    }


    /**
     * logInscriptionForm - charges the inscription form on the view
     */
    logInscriptionForm = () => {
        this.inscription = !this.inscription;
    }

    /**
     * changeVisibility - change the visibility of the password
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
        hour < 16 ? this.startMessage = "Bonjour" : this.startMessage = "Bonsoir"
    }



    constructor(private auth: AuthService) {
        const date = new Date();
        const hour = date.getHours();
        this.getStartMessage(hour);
    }


    ngOnDestroy(){
        
    }

}
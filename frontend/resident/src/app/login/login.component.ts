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
class LoginComponent{
    title = 'Connectez-vous';

}
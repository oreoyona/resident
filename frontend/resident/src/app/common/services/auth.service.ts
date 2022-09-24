import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class AuthService{

    options = {

    }

   login = (value: Object):Observable<Object> => {
        return this.http.post('/api/auth', value)
   }

    constructor(private http: HttpClient){

    }
}
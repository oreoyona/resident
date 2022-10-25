import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Post } from '../interfaces/main'

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    options = {

    }

    data: Post[] = [{
        "author": "Yan Kibamba",
        "profile_picture": "profile2",
        "post_description": "Quelqu'un peut m'expliquer ce Scanner svp? il s'agit d'un cas que nos avons eu ce matin",
        "hopital_id": 1,
        "like_count": 20,
        "comment_count": 40,
        "post_picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/INFARCT.jpg/260px-INFARCT.jpg"
    }
        ,
    {
        "author": "Hartios, Dpt Bato",
        "profile_picture": "profile3",
        "post_description": "Une image pour comprendre et retenir les nerfs craniens",
        "hopital_id": 2,
        "like_count": 120,
        "comment_count": 4,
        "post_picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Brain_human_normal_inferior_view_with_labels_fr.svg/1200px-Brain_human_normal_inferior_view_with_labels_fr.svg.png"
    },

    {
        "author": "Dr Annita Ilunga",
        "profile_picture": "profile4",
        "post_description": "Un livre que vous devriez lire pour comprendre votre cours d'Anatomie",
        "hopital_id": 1,
        "like_count": 10,
        "comment_count": 20,
        "post_picture": "https://studenthouse.tn/1518-large_default/atlas-d-anatomie-humaine.jpg"
    }

    ]

    login = (value: Object): Observable<Object> => {
        return this.http.post('/api/auth', value)
    }

    constructor(private http: HttpClient) {

    }
}
import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', ()=>{
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [LoginComponent]
        }).compileComponents();
    })
});
it('Should create the componment titled resident', ()=> {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.connexion)
})
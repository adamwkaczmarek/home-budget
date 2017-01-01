import { Component, Output, Input } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';



@Component({
    selector: 'login-page',
    templateUrl: 'login.component.html'
})


export class LoginComponent {

    username = 'admin';
    password = 'xxxxxx';
    message = '';

    constructor(public authService: AuthService, public router: Router) {
    };

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('LogMeIn as ' + this.username);
        this.authService
            .authenticate(this.username, this.password)
            .catch(errorMessage => this.message = errorMessage)
            .then(() => {
                if (this.authService.isAuthenticated()) {
                    this.router.navigate(['']);
                }
            });

    }
}



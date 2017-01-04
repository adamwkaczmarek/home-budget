import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'

})

export class AppComponent {
  public authenticated  : boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authenticated=authService.isAuthenticated();
 }

 logout():void{
    this.authService.logout();
    this.router.navigate(['login']);
 }

}


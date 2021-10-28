import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router, 
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  handleLogin(formData: any): void{
    console.log('Logging in...');
    console.log(formData.value);
    this.authService.login(formData.value)
      .subscribe( (res: any) => {
        console.log(res);
        alert("Login Successful!");
        if(res&& res.token){
          localStorage.setItem('authToken', res.token);
          // read the query param to know the return URL
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['returnURL']);
        } 
        
      });
  }

}

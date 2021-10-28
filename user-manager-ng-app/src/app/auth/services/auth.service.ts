import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login
  login(formData: any): any {
    console.log(formData);

    // API URL? https://reqres.in/api/login
    // Http MEthod? POST 
    // API client? HttpClient 
    return this.http.post('https://reqres.in/api/login', formData)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuth(){
    if(localStorage.getItem('authToken')){
      return true;
    }else{
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { // dep injection
  }

  // create
  createUser( formData: any){ // 1. get the form data from the comp ts 
    console.log(formData); // submittable form data
  
    // 2. send the data to the REST API 
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? POST 
    // 2.3 What's the REST API Client? HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map((res: any) => { // 3. get the response from the REST API 
        console.log(res); 
        // 4. send the response to the comp ts
        return res;
      })); 
  }

  // read all users
  getUsers(): any{   // 1. get the request from the comp
    console.log('Inside service');
    // 2. send the request to the REST API
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? GET
    // 2.3 What's the API client tool? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res:any) => { // 3. get the resp from the REST API 
        console.log(res);
        return res; // 4. send the resp to the comp 
      })); 
  }

  // read one user detais 
  getUserById(userId: string | null): any{ 

    console.log(userId);
    let userIdURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get(userIdURL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update user
  updateUser(formData: any){
    console.log(formData);
    let updateURL = `https://jsonplaceholder.typicode.com/users/${formData.id}`;

    return this.http.put(updateURL, formData)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  // delete user

  // search 

  // filter

  // count   

}

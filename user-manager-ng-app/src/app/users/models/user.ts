// Model
import { Injectable } from "@angular/core";

interface IUser{
  id?: number;
  name: string;
  phone: string;
  email: string;
}

// Decorator
@Injectable({
  providedIn: 'root'
})
export class User implements IUser{
  id = 0;
  name = '';
  phone = '';
  email = '';

  // util methods can be added here
}

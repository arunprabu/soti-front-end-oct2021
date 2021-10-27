import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: have the default cart items in the cart 
  // We will normally load this from REST API 
  // but now mocking it with static data
  private defaultCartItems: any[] = [
    {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    }
  ];

  // Step 2: Create BehaviorSubject with defaultCartItems
  // in order to make the above data subscribable, we need to create an Observable with defaultCartItems.
  private cartItemsList = new BehaviorSubject(this.defaultCartItems);

  // Step 3: Let's now make the above as Observable... so that any comp can subscribe to it. 
  latestCartItemsList: Observable<any> = this.cartItemsList.asObservable();
  // the above latestCartItemsList is now subscribable from any comp

  constructor() { }

  updateCart(pdt: any): void{
    console.log(pdt);
  
    // Let's update the cart items 
    this.latestCartItemsList
      .pipe( take(1) )
      .subscribe( (cartItems: any) => {
        console.log(cartItems); //Array

        const newCartItemsArr = [ ...cartItems, pdt ];
        console.log(newCartItemsArr);
        this.cartItemsList.next(newCartItemsArr);
      });
  }
}

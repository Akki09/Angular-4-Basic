import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {

  constructor() { }

  getGreeting = ():String=> { 
      return "Hello Good Morning folks this is Live from the Service"; 
   } 

  updateProduct = (x,y):any=>{

    x.splice(y, 1);

    alert('delete via service');
    return x;

  }

}

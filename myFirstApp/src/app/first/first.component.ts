import { Component, OnInit } from '@angular/core';
import { AllProductComponent } from '../all-product/all-product.component'
import { GreetingService } from '../greeting.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  arr:String[]= [
    "Akshay",
    "David",
    "Hazard",
    "Deigo",
    "Pedro",
    "Morata"
  ];

  public productDetails:AllProductComponent[]=[];
 
  constructor(private _greetingservice : GreetingService ) {
  }

  ngOnInit() {
    
    this.productDetails[0] = new AllProductComponent(1,"Mobile","Motorola G4 Plus Black",15000);
    this.productDetails[1] = new AllProductComponent(2,"Laptop","Lenovo G510 Black",38000);
    this.productDetails[2] = new AllProductComponent(3,"Camera","Canon 700D Black",45000);
  }

  delClick = (i)=>{
    // alert(this.productDetails.indexOf(i));
    // alert("Delete is Clicked"+i);
    this.productDetails=this._greetingservice.
    updateProduct(this.productDetails,i);
    //this.productDetails.splice(i, 1);
  }

}

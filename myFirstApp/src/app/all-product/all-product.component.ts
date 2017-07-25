import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  constructor(public pId:number,public pName:string,
    public pDetail:string,public pPrice:number) {
      this.pId = pId;
      this.pName = pName;
      this.pDetail = pDetail;
      this.pPrice = pPrice;
     }

  ngOnInit() {
  }

}

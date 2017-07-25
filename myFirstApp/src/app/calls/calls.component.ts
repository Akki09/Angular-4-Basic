import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HandelcallsService } from "../handelcalls.service";

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  getOutput:string;
  postOutput:string;
  constructor(private _handel:HandelcallsService) { }

  ngOnInit() {
  }

  getClicked(){
    
    this._handel.getRequest().subscribe(
      data=>this.getOutput=JSON.stringify(data),
      error=> console.log("Something Went Wrong")
    );
    alert("get Clicked");
  }

  postClicked(){
    alert("post Clicked");
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class HandelcallsService {

  constructor(private _http:Http) { }

  getRequest= ()=>{
   return this._http.get('http://date.jsontest.com')
   .map(res=>res.json())

  }

}

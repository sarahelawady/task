import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _HttpClient:HttpClient) { }
  getProduct():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=c4b71564a4007b6e04f21126f7c10155`)
  }
}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[]=[];
  imgpref:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _StoreService:StoreService) { }

  ngOnInit(): void {
    this._StoreService.getProduct().subscribe((response)=>{

      console.log(response.results);

      this.products = response.results;

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[]=[];
  appear:number = 999;
  imgpref:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _StoreService:StoreService) { }

  ngOnInit(): void {
    this._StoreService.getProduct().subscribe((response)=>{

      console.log(response.results);

      this.products = response.results;

    })
  }


  menuClick(item:number)
  {
    if (this.appear !== item)
    {
      $('.menu1').fadeOut();
    console.log(item);

    $('#menu'+item).fadeIn();
    this.appear = item;
    }
    else
    {
      $('#menu'+item).fadeToggle();
      this.appear = item;
    }

  }

}

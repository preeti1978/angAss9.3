import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {

  constructor() { }
  getFood(){
  	let dishes:Object[]=[
  		{name:'Biriyani', cost:200},
  		{name:'Dal',cost:150},
  		{name:'Pepsi',cost:20},
  		{name:'Icecream',cost:90},
  		{name:'chocolate',cost:10},
  		{name:'Lime juice',cost:30},
  		{name:'toffee',cost:5}
  	];
  	return dishes;
  }

}

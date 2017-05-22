import { Component, OnInit } from '@angular/core';
import {FoodService} from 'app/food.service';


@Component({
  selector: 'app-root1',
  templateUrl: './root1.component.html',
  styleUrls: ['./root1.component.css'],
  providers:[FoodService]//providers : array of n services that you will use
})
export class RootComponent implements OnInit {
//using constructor injection
  constructor(public fsvc:FoodService) { }

  ngOnInit() {

  }
tempObj:Object[];
  getFood(){
  	this.tempObj = this.fsvc.getFood();
  }

}

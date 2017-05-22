import { Component,Inject } from '@angular/core';
import {FoodService} from './food.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FoodService]//providers : array of n services that you will use
})
export class AppComponent {
  title = 'app works!';
  fSvc;//local property
  data:Object[];
  //We are achieveing dependency injection through using decorator @Inject
  constructor (@Inject(FoodService) foodService){ //foodService is alias. We are passing FoodService as parameter to @Inject
  	this.fSvc = foodService; //store alias in property
  }
  getFood(){
  	this.data=this.fSvc.getFood();

  }
}

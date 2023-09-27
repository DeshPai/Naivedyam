import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

foods:Food[]=[];

  constructor(private FoodService:FoodService,  activatedRoute:ActivatedRoute){
    let foodObservable :Observable<Food[]>;

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        foodObservable =this.FoodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      foodObservable = this.FoodService.getAllFoodsByTag(params.tag);
      else
      foodObservable = this.FoodService.getAll();

      // subscribe   once to get value from foodObservable.
      foodObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
    })
     
  }
  
  ngOnInit(): void {
    
  }

}

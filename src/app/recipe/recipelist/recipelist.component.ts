import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('First Recipe','Peppers & Soya Sauce','https://maayeka.com/wp-content/uploads/2020/04/mushroom-pepper-fry-maayeka.jpg.webp')
  ];

  ngOnInit() {
    
  }
}

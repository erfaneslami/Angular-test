import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'this is burger land burger!',
      'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg'
    ),
    new Recipe(
      'pizza',
      'this is burger land pizza!',
      'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'this is burger land burger!',
      'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg',
      [new Ingredient('apple', 5), new Ingredient('mashroom', 10)]
    ),
    new Recipe(
      'pizza',
      'this is burger land pizza!',
      'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg',
      [new Ingredient('french Frize', 10), new Ingredient('meat', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByName(name: string) {
    return this.recipes.find((recipe) => recipe.name === name);
  }
}

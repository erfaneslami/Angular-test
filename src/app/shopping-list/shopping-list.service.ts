import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('oranges', 8),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  // addIngredient(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  //   console.log(this.ingredients);
  // }
  addIngredient(newIngredient: Ingredient[]) {
    // newIngredient.forEach((ing) => this.ingredients.push(ing));
    this.ingredients.push(...newIngredient);

    console.log(this.ingredients);
  }
}

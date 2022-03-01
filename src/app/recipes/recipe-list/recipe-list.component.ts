import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Burger',
  //     'this is burger land burger!',
  //     'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg'
  //   ),
  //   new Recipe(
  //     'pizza',
  //     'this is burger land pizza!',
  //     'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg'
  //   ),
  // ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  sendRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  isOpen = false;
  // @Input() recipe: Recipe;
  recipe: Recipe;
  @ViewChild('dropdownContent') dropdown: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    console.log(this.dropdown);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>
        (this.recipe = this.recipeService.getRecipeByName(params['name']))
    );
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  toShoppingList() {
    this.shoppingListService.addIngredient(this.recipe.ingredient);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipes: boolean = false;
  shoppingList = false;

  recipesControl() {
    this.recipes = true;
    this.shoppingList = false;
  }

  shoppingListControl() {
    this.recipes = false;
    this.shoppingList = true;
  }
}

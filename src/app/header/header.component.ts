import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class headerComponent {
  @Output() recipesClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();

  onRecipesHandler() {
    this.recipesClicked.emit(true);
  }

  onShoppingListHandler() {
    this.shoppingListClicked.emit(true);
  }
}

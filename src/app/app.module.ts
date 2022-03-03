import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModules } from './app-routeing.module';
import { StartingComponent } from './recipes/recipe-detail/starting/starting.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    StartingComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

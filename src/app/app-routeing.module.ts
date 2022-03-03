import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const route: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'shipping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModules {}

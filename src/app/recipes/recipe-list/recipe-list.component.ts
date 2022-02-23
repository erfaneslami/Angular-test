import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'this is burger land burger!',
      'https://cdn.pixabay.com/photo/2019/05/24/11/18/burger-4226039_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, AfterViewInit {
  isOpen = false;
  @Input() recipe: Recipe;
  @ViewChild('dropdownContent') dropdown: ElementRef;

  constructor() {
    console.log(this.dropdown);
  }

  ngOnInit(): void {
    console.log(this.dropdown);
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    console.log(this.dropdown);
  }
}

import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2SrURyOwKDHSTqexsFMJB0&ust=1682569739130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC34u7axv4CFQAAAAAdAAAAABAE'),
  ];
  constructor () {

  }
}

import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Test', 
            'Test', 
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2SrURyOwKDHSTqexsFMJB0&ust=1682569739130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC34u7axv4CFQAAAAAdAAAAABAE'
            ,[
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
            ),
            new Recipe(
                'Test', 
                'Test', 
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2SrURyOwKDHSTqexsFMJB0&ust=1682569739130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC34u7axv4CFQAAAAAdAAAAABAE'
                ,[
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]
                ),
      ];
    
    constructor(private slService: ShoppingListService) {

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
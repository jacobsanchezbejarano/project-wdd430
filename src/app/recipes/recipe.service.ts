import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new Subject<Recipe>();
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Test', 
    //         'Test', 
    //         'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2SrURyOwKDHSTqexsFMJB0&ust=1682569739130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC34u7axv4CFQAAAAAdAAAAABAE'
    //         ,[
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //         ),
    //         new Recipe(
    //             'Test', 
    //             'Test', 
    //             'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2SrURyOwKDHSTqexsFMJB0&ust=1682569739130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC34u7axv4CFQAAAAAdAAAAABAE'
    //             ,[
    //                 new Ingredient('Meat', 1),
    //                 new Ingredient('French Fries', 20)
    //             ]
    //             ),
    //   ];

    private recipes: Recipe[] = [];
    
    constructor(private slService: ShoppingListService) {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
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

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
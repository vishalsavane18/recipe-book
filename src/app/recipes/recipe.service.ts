import { EventEmitter } from 'stream';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      ' A test Recipe ',
      'This is a simply a test',
      'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'
    ),

    new Recipe(
      ' A test Recipe ',
      'This is a simply a test',
      'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
}

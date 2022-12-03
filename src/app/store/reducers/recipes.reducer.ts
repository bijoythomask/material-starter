import { act } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from 'src/app/model/recipe.model';
import { loadRecipessSuccess } from '../actions/recipes.actions';

export const recipesFeatureKey = 'recipes';

export interface RecipesState {
  recipes: ReadonlyArray<Recipe>;
}

export const initialState: RecipesState = {
  recipes: [],
};

export const recipesReducer = createReducer(
  initialState,
  on(loadRecipessSuccess, (state, action) => {
    const recipes = action.data;
    return { ...state, recipes };
  })
);

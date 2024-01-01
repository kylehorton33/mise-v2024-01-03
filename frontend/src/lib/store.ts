import { writable } from "svelte/store";

export const ingredients = writable([])
export const recipes = writable<Recipe[]>()
export const recipeIngredients = writable([])
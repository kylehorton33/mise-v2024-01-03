import { writable } from "svelte/store";

export const ingredients = writable<Ingredient[]>([])
export const recipes = writable<Recipe[]>([])

export const filterTerm = writable<string>("")

// TODO: add localStorage for stock list
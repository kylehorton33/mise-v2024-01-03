import { writable } from "svelte/store";
import { localStorageStore } from '@skeletonlabs/skeleton';

export const ingredients = writable<Ingredient[]>([])
export const recipes = writable<Recipe[]>([])

export const filterTerm = writable<string>("")

// TODO: add localStorage for stock list
export const stockList = localStorageStore<StockList>('stockList', {});
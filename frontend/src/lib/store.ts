import { writable } from "svelte/store";
import { localStorageStore } from '@skeletonlabs/skeleton';

export const ingredients = writable<Ingredient[]>([])
export const recipes = writable<Recipe[]>([])
export const user = writable<App.Locals['user']>(null)

export const filterTerm = writable<string>("")

export const stockList = localStorageStore<StockList>('stockList', {});

export const PB_URL = writable<string>("")
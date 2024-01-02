import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const user = locals.user
    try {
        const ingredients = await locals.pb.collection('ingredients')
            .getFullList({ fields: 'id, name, slug, unit', sort: 'slug' }) as Ingredient[]
        const recipes = await locals.pb.collection('recipes')
            .getFullList({ fields: 'id, name, slug, instructions, image', sort: 'slug' }) as Recipe[]
        const recipeIngredients = await locals.pb.collection('recipeIngredients')
            .getFullList({ fields: 'recipe, ingredient, quantity' }) as RecipeIngredient[]

        recipes.forEach((recipe) => {
            recipe.ingredients = recipeIngredients
                .filter((line) => line.recipe === recipe.id)
                .map((line) => {
                    return { ...line, ingredient: ingredients.find((i) => i.id === line.ingredient)}
                });
        });

        const PB_URL = import.meta.env.VITE_POCKETBASE_URL

        return { ingredients, recipes, user, PB_URL }
    } catch (e) {
        console.log('[ERROR] at src/+page.server.ts');
        console.log(e)
    }
}) satisfies LayoutServerLoad;
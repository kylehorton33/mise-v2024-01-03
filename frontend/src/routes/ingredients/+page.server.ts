import type { Actions } from "@sveltejs/kit"
import { createSlug } from '$lib/utils'

type NewIngredientType = {
    name: string;
    unit?: string;
}

class Ingredient {
    name: string;
    slug: string;
    unit: string | null;
    constructor(i: NewIngredientType) {
        this.name = i.name;
        this.slug = createSlug(i.name);
        this.unit = (i.unit != undefined) ? i.unit : 'oz'
    }
    key() {
        return this.slug;
    }
}


export const actions = {
    create: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData()) as NewIngredientType
        console.log(body)
        if (!locals.user) {
            // If no user, create a toast with error, return before
            // creating new ingredient
            console.log('You need to log in first')
            return
        }
        try {
            const data = new Ingredient(body)
            const result = await locals.pb.collection('ingredients')
                .create(data, { requestKey: data.key() })
        } catch (e) {
            console.log(e)
        }
    }
} satisfies Actions
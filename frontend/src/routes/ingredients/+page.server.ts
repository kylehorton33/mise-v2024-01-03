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
        if (!locals.user) {
            return { response: { message: 'You need to log in first', background: 'variant-filled-error' } }
        }
        try {
            const data = new Ingredient(body)
            const result = await locals.pb.collection('ingredients')
                .create(data, { requestKey: data.key() })
            return { response: { message: `Created: ${data.name}`, background: 'variant-filled-success' } }
        } catch (e) {
            console.log(e)
            return { response: { message: `Failed to create: ${body.name}`, background: 'variant-filled-error' } }
        }
    }
} satisfies Actions
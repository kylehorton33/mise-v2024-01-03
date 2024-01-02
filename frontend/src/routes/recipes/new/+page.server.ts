import type { PageServerLoad } from "./$types";
import { redirect, type Actions } from "@sveltejs/kit"
import { createSlug } from '$lib/utils'

type NewRecipeType = {
    name: string;
    instructions: string;
}

class Recipe {
    name: string;
    slug: string;
    instructions: string;
    constructor(r: NewRecipeType) {
        this.name = r.name;
        this.slug = createSlug(r.name);
        this.instructions = r.instructions;
    }
    key() {
        return this.slug;
    }
}

export const load = (async ({ locals }) => {
    if (!locals.user) {
        throw redirect(301, '/auth/login?msg=You must be logged in to create content&color=variant-filled-error')
    }
}) satisfies PageServerLoad;

export const actions = {
    create: async ({ locals, request }) => {
        const formData = await request.formData()
        const body = Object.fromEntries(formData)

        if (!locals.user) {
            return { response: { message: 'You need to log in first', background: 'variant-filled-error' } }
        }

        let result: { id: string, name: string, slug: string };

        try {
            const data = new Recipe({ name: body.name as string, instructions: body.instructions as string })
            result = await locals.pb.collection('recipes')
                .create({ ...data, image: body.image, createdBy: locals.user.id }, { requestKey: data.key() })
        } catch (e) {
            console.log(e)
            return { response: { message: `Failed to create: ${body.name}`, background: 'variant-filled-error' } }
        }

        const lines = [...formData.keys()].filter((key) => key.includes('line'))
        lines.filter((line) => line.includes('quantity')).forEach(async (q, index) => {
            const quantity = parseFloat(body[`line[${index}][quantity]`] as string)
            const ingredient = body[`line[${index}][id]`]
            try {
                await locals.pb.collection('recipeIngredients')
                    .create({ recipe: result.id, ingredient, quantity, createdBy: locals.user.id }, { requestKey: ingredient })
            } catch (e) {
                console.log(e)
                return { response: { message: `Failure in ingredient lines`, background: 'variant-filled-error' } }
            }
        })
        redirect(301, `/recipes/${result.slug}?new=${result.name}`)
    }
} satisfies Actions
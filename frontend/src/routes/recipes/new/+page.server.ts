import type { PageServerLoad } from "./$types";
import { redirect, type Actions } from "@sveltejs/kit"
import { createSlug } from '$lib/utils'

export const load = (async ({ locals }) => {
    if (!locals.user) {
        throw redirect(301, '/auth/login?msg=You must be logged in to create content&color=variant-filled-error')
    }
}) satisfies PageServerLoad;

export const actions = {
    create: async ({ locals, request }) => {
        const body = await request.formData()

        const image = body.get('image') as File;
        const name = body.get('name') as string;

        if (image.size === 0) {
            body.delete('image');
        }

        body.append('createdBy', locals.user.id)
        body.append('slug', createSlug(name))

        const formData = Object.fromEntries(body)

        if (!locals.user) {
            return { response: { message: 'You need to log in first', background: 'variant-filled-error' } }
        }

        let result: { id: string, name: string, slug: string };

        // DONE: remove image field if blank
        // DONE: add slug directly to 'body', no need to use Recipe class

        try {
            result = await locals.pb.collection('recipes').create(formData)
        } catch (e) {
            console.log(e)
            return { response: { message: `Failed to create: ${name}`, background: 'variant-filled-error' } }
        }

        const lines = [...body.keys()].filter((key) => key.includes('line'))
        lines.filter((line) => line.includes('quantity')).forEach(async (q, index) => {
            const quantity = parseFloat(formData[q] as string)
            const ingredient = formData[`line[${index}][id]`]
            try {
                await locals.pb.collection('recipeIngredients')
                    .create({ recipe: result.id, ingredient, quantity, index, createdBy: locals.user.id }, { requestKey: index })
            } catch (e) {
                console.log(e)
                return { response: { message: `Failure in ingredient lines`, background: 'variant-filled-error' } }
            }
        })
        redirect(301, `/recipes/${result.slug}?new=${result.name}`)
    }
} satisfies Actions
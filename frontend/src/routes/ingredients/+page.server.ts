import type { Actions } from "@sveltejs/kit"

export const actions = {
    create: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        console.log(body)
        if (locals.user === undefined) {
            // If no user, create a toast with error, return before
            // creating new ingredient
            console.log('need to log in first')
            return
        }
        try {
            // create new entry on ingredients
            console.log(locals.pb)
        } catch (e) {
            console.log(e)
        }
    }
} satisfies Actions
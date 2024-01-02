import type { Actions } from "@sveltejs/kit"
import { error, redirect } from "@sveltejs/kit"

export const actions = {
    register: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').create(data)
        } catch (e) {
            console.log(e)
            throw error(401, `Something went wrong`)
        }

        throw redirect(303, '/login')
    }
} satisfies Actions
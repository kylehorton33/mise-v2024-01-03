import type { Actions } from "@sveltejs/kit"
import { error, redirect } from "@sveltejs/kit"

export const actions = {
    login: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        console.log(body)

        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
            if (!locals.pb.authStore.model.verified) {
                locals.pb.authStore.clear()
                throw error(401, 'User not verified')
            }
        } catch (e) {
            console.log(e)
            throw error(401, `User ${body.email} could not be logged in`)
        }

        throw redirect(303, '/')
    }
} satisfies Actions
import type { Actions } from "@sveltejs/kit"
import { HttpError_1, error, redirect } from "@sveltejs/kit"
import { ClientResponseError } from "pocketbase"

export const actions = {
    login: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
        } catch (e) {
            console.log(e)
            throw error(401, `User ${body.email} could not be logged in. Confirm username and password.`)
        }

        if (!locals.pb.authStore.model.verified) {
            locals.pb.authStore.clear()
            throw redirect(303, '/auth/login?msg=Your account must be verified first&color=variant-filled-error')
        }

        throw redirect(303, '/')
    }
} satisfies Actions
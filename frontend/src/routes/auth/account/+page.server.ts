import type { PageServerLoad } from './$types';
import type { Actions } from "@sveltejs/kit"
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
    // DONE: redirect to login, toast message (must log in)
    if (!locals.user) {
        // DONE: figure out how to pass toast mesasge
        throw redirect(301, '/auth/login?msg=You must be logged in to access this page&color=variant-filled-error')
    }
    return { user: locals.user };
}) satisfies PageServerLoad;

export const actions = {
    logout: async ({ locals }) => {
        locals.pb.authStore.clear()
        locals.user = undefined

        throw redirect(303, '/')
    }
} satisfies Actions
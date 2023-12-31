import type { PageServerLoad } from './$types';
import type { Actions } from "@sveltejs/kit"
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
    return { user: locals.user };
}) satisfies PageServerLoad;

export const actions = {
    logout: async ({ locals }) => {
        locals.pb.authStore.clear()
        locals.user = undefined

        throw redirect(303, '/')
    }
} satisfies Actions
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // TODO: redirect to '/recipes'
    redirect(301, '/recipes')
}) satisfies PageServerLoad;
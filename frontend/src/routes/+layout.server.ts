import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const user = locals.user
    try {
        const ingredients = await locals.pb.collection('ingredients')
            .getFullList({ fields: 'id, name, slug, unit', sort: 'slug' })
        return { ingredients, user }
    } catch (e) {
        console.log('[ERROR] at src/+page.server.ts');
        console.log(e)
    }
}) satisfies LayoutServerLoad;
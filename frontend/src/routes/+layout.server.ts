import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    try {
        const ingredients = await locals.pb.collection('ingredients')
            .getFullList({ fields: 'id, name, slug, unit', sort: 'slug' })
        return { ingredients }
    } catch (e) {
        console.log('[ERROR] at src/+page.server.ts');
        console.log(e)
    }
}) satisfies LayoutServerLoad;
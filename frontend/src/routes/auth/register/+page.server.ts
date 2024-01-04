import type { Actions } from "@sveltejs/kit"
import { error, fail, redirect } from '@sveltejs/kit';
import { registerUserSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';


export const actions = {
    register: async ({locals, request}) => {
        //const data = Object.fromEntries(await request.formData())
        // TODO: zod validate data
        const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

        console.log(errors)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
        try {
            await locals.pb.collection('users').create(formData)
        } catch (e) {
            return fail(400, {
                data: formData,
                errors: { register: 'Email already in use or something else went wrong.' }
            })
        }

        throw redirect(303, '/auth/login')
    }
} satisfies Actions
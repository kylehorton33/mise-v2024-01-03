// returns a slug version of text
// e.g. createSlug('SoMe Cr@azy t e X...t') => 'some-crazy-text'
export function createSlug(text: string) {
    return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

// Send a Toast
import { type ToastSettings } from '@skeletonlabs/skeleton';
export function sendToast(toastStore: any, message: string, background: string = 'variant-filled-error') {
    const t: ToastSettings = {
        message,
        background
    };
    toastStore.trigger(t);
}

// Open Drawer
import { type DrawerSettings } from '@skeletonlabs/skeleton';
import type { ZodError, ZodSchema } from 'zod';
export function openDrawer(drawerStore: any) {
    const drawerSettings: DrawerSettings = {
        id: 'new-ingredient',
        position: 'bottom',
        height: 'h-72',
        duration: 200
    };
    drawerStore.open(drawerSettings);
}

// Validate form Data using given zod schema
export const validateData = async (formData: FormData, schema: ZodSchema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
        const e = err as ZodError
		const errors = e.flatten();
		return {
			formData: body,
			errors
		};
	}
};

// return raw HTML of fractional representation of number
export function fractionFormat(quantity: number) {
    if (quantity === 1.5) {
        return "1 <span class='diagonal-fractions'>1/2</span>";
    } else if (quantity === 0.75) {
        return "<span class='diagonal-fractions'>3/4</span>";
    } else if (quantity === 0.5) {
        return "<span class='diagonal-fractions'>1/2</span>";
    } else if (quantity === 0.25) {
        return "<span class='diagonal-fractions'>1/4</span>";
    } else {
        return quantity;
    }
}
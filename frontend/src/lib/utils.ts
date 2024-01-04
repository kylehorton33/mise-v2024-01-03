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
export function sendToast(toastStore: any, message: string) {
    const t: ToastSettings = {
        message,
        background: 'variant-filled-error'
    };
    toastStore.trigger(t);
}

// Open Drawer
import { type DrawerSettings } from '@skeletonlabs/skeleton';
export function openDrawer(drawerStore: any) {
    const drawerSettings: DrawerSettings = {
        id: 'new-ingredient',
        position: 'bottom',
        height: 'h-72',
        duration: 200
    };
    drawerStore.open(drawerSettings);
}
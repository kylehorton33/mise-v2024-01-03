// returns a slug version of text
// e.g. createSlug('SoMe Cr@azy t e X...t') => 'some-crazy-text'
export function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
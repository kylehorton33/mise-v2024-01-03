import { it, expect } from 'vitest';
import { createSlug } from "./utils";

it('creates expected slug', () => {
    expect(createSlug('SomE stRING')).toBe('some-string');
});




import { it, expect } from 'vitest';
import { createSlug } from "./utils";

it('creates expected slug', () => {
    expect(createSlug('WeIrD CAsE')).toBe('weird-case');
    expect(createSlug('several words spaced out')).toBe('several-words-spaced-out');
    expect(createSlug('symbol (*&$)#)*!@madness')).toBe('symbol-madness');
});




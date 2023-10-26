import { writable } from 'svelte/store';

export const inputs = writable({});
export const navigation = writable({
    open: false,
});

export function storeInput(n, value) {
    inputs.update((s) => {
        s[n] = value;
        return s;
    });
}
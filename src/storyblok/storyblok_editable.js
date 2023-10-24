import { storyblokEditable as storyblokEditableAstro } from '@storyblok/astro';

export function storyblokEditable(blok, production = false) {
    if (production) {
        return {};
    }

    return storyblokEditableAstro(blok);
}
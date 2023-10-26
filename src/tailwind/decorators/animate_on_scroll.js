const nameDefault = 'animate_on_scroll';

export function getAnimateOnScrollClasses(blok, {name = nameDefault} = {}) {
    if (!blok[name]) return '';

    return `animate-on-scroll opacity-0 transition-opacity duration-1000 delay-1000`;
}
const possibleJustifyItemsDefault = {
    xs: {
        "center": "justify-items-center",
        "start": "justify-items-start",
        "end": "justify-items-end",
        "stretch": "justify-items-stretch",
        "baseline": "justify-items-baseline",
        "auto": "justify-items-auto",
    },
    sm: {
        "center": "sm:justify-items-center",
        "start": "sm:justify-items-start",
        "end": "sm:justify-items-end",
        "stretch": "sm:justify-items-stretch",
        "baseline": "sm:justify-items-baseline",
        "auto": "sm:justify-items-auto",
    },
    md: {
        "center": "md:justify-items-center",
        "start": "md:justify-items-start",
        "end": "md:justify-items-end",
        "stretch": "md:justify-items-stretch",
        "baseline": "md:justify-items-baseline",
        "auto": "md:justify-items-auto",
    },
    lg: {
        "center": "lg:justify-items-center",
        "start": "lg:justify-items-start",
        "end": "lg:justify-items-end",
        "stretch": "lg:justify-items-stretch",
        "baseline": "lg:justify-items-baseline",
        "auto": "lg:justify-items-auto",
    },
    xl: {
        "center": "xl:justify-items-center",
        "start": "xl:justify-items-start",
        "end": "xl:justify-items-end",
        "stretch": "xl:justify-items-stretch",
        "baseline": "xl:justify-items-baseline",
        "auto": "xl:justify-items-auto",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'justify_items';

export function getJustifyItemsClasses(blok, {possibleJustifyItems = possibleJustifyItemsDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleJustifyItems[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
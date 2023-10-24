const possibleAlignItemsDefault = {
    xs: {
        "center": "items-center",
        "start": "items-start",
        "end": "items-end",
        "stretch": "items-stretch",
        "baseline": "items-baseline",
        "auto": "items-auto",
    },
    sm: {
        "center": "sm:items-center",
        "start": "sm:items-start",
        "end": "sm:items-end",
        "stretch": "sm:items-stretch",
        "baseline": "sm:items-baseline",
        "auto": "sm:items-auto",
    },
    md: {
        "center": "md:items-center",
        "start": "md:items-start",
        "end": "md:items-end",
        "stretch": "md:items-stretch",
        "baseline": "md:items-baseline",
        "auto": "md:items-auto",
    },
    lg: {
        "center": "lg:items-center",
        "start": "lg:items-start",
        "end": "lg:items-end",
        "stretch": "lg:items-stretch",
        "baseline": "lg:items-baseline",
        "auto": "lg:items-auto",
    },
    xl: {
        "center": "xl:items-center",
        "start": "xl:items-start",
        "end": "xl:items-end",
        "stretch": "xl:items-stretch",
        "baseline": "xl:items-baseline",
        "auto": "xl:items-auto",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'align_items';

export function getAlignItemsClasses(blok, {possibleAlignItems = possibleAlignItemsDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleAlignItems[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
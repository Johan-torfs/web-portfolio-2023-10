const possibleMarginDefault = {
    xs: {
        0: "mb-0",
        2: "mb-2",
        4: "mb-4",
        6: "mb-6",
        8: "mb-8",
        16: "mb-16",
        24: "mb-24",
    },
    sm: {
        0: "sm:mb-0",
        2: "sm:mb-2",
        4: "sm:mb-4",
        6: "sm:mb-6",
        8: "sm:mb-8",
        16: "sm:mb-16",
        24: "sm:mb-24",
    },
    md: {
        0: "md:mb-0",
        2: "md:mb-2",
        4: "md:mb-4",
        6: "md:mb-6",
        8: "md:mb-8",
        16: "md:mb-16",
        24: "md:mb-24",
    },
    lg: {
        0: "lg:mb-0",
        2: "lg:mb-2",
        4: "lg:mb-4",
        6: "lg:mb-6",
        8: "lg:mb-8",
        16: "lg:mb-16",
        24: "lg:mb-24",
    },
    xl: {
        0: "xl:mb-0",
        2: "xl:mb-2",
        4: "xl:mb-4",
        6: "xl:mb-6",
        8: "xl:mb-8",
        16: "xl:mb-16",
        24: "xl:mb-24",
    },
};

const possibleMarginPerTag = {
    h1: "mb-12 sm:mb-16",
    h2: "mb-12 sm:mb-16",
}

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'margin_bottom';
const tagNameDefault = 'type';

export function getMarginBottomClasses(blok, {possibleMargin = possibleMarginDefault, screenSizes = screenSizesDefault, name = nameDefault, tagName = tagNameDefault} = {}) {    
    const className = `
        ${blok[name] ? screenSizes.sizes.map((screen) => (blok[name][screen] ? possibleMargin[screen][blok[name][screen]] : '')).join(' ') : (blok[tagName] ? possibleMarginPerTag[blok[tagName]] || '' : '')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
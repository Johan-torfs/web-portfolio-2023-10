const possibleMarginDefault = {
    xs: {
        0: "mx-0",
        2: "mx-2",
        4: "mx-4",
        6: "mx-6",
        8: "mx-8",
        16: "mx-16",
        24: "mx-24",
    },
    sm: {
        0: "sm:mx-0",
        2: "sm:mx-2",
        4: "sm:mx-4",
        6: "sm:mx-6",
        8: "sm:mx-8",
        16: "sm:mx-16",
        24: "sm:mx-24",
    },
    md: {
        0: "md:mx-0",
        2: "md:mx-2",
        4: "md:mx-4",
        6: "md:mx-6",
        8: "md:mx-8",
        16: "md:mx-16",
        24: "md:mx-24",
    },
    lg: {
        0: "lg:mx-0",
        2: "lg:mx-2",
        4: "lg:mx-4",
        6: "lg:mx-6",
        8: "lg:mx-8",
        16: "lg:mx-16",
        24: "lg:mx-24",
    },
    xl: {
        0: "xl:mx-0",
        2: "xl:mx-2",
        4: "xl:mx-4",
        6: "xl:mx-6",
        8: "xl:mx-8",
        16: "xl:mx-16",
        24: "xl:mx-24",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'margin_x';

export function getMarginXClasses(blok, {possibleMargin = possibleMarginDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleMargin[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
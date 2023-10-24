const possiblePaddingDefault = {
    xs: {
        0: "py-0",
        2: "py-2",
        4: "py-4",
        6: "py-6",
        8: "py-8",
        16: "py-16",
        24: "py-24",
    },
    sm: {
        0: "sm:py-0",
        2: "sm:py-2",
        4: "sm:py-4",
        6: "sm:py-6",
        8: "sm:py-8",
        16: "sm:py-16",
        24: "sm:py-24",
    },
    md: {
        0: "md:py-0",
        2: "md:py-2",
        4: "md:py-4",
        6: "md:py-6",
        8: "md:py-8",
        16: "md:py-16",
        24: "md:py-24",
    },
    lg: {
        0: "lg:py-0",
        2: "lg:py-2",
        4: "lg:py-4",
        6: "lg:py-6",
        8: "lg:py-8",
        16: "lg:py-16",
        24: "lg:py-24",
    },
    xl: {
        0: "xl:py-0",
        2: "xl:py-2",
        4: "xl:py-4",
        6: "xl:py-6",
        8: "xl:py-8",
        16: "xl:py-16",
        24: "xl:py-24",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'padding_y';

export function getPaddingYClasses(blok, {possiblePadding = possiblePaddingDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possiblePadding[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
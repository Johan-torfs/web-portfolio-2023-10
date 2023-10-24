const possiblePaddingDefault = {
    xs: {
        0: "px-0",
        2: "px-2",
        4: "px-4",
        6: "px-6",
        8: "px-8",
        16: "px-16",
        24: "px-24",
    },
    sm: {
        0: "sm:px-0",
        2: "sm:px-2",
        4: "sm:px-4",
        6: "sm:px-6",
        8: "sm:px-8",
        16: "sm:px-16",
        24: "sm:px-24",
    },
    md: {
        0: "md:px-0",
        2: "md:px-2",
        4: "md:px-4",
        6: "md:px-6",
        8: "md:px-8",
        16: "md:px-16",
        24: "md:px-24",
    },
    lg: {
        0: "lg:px-0",
        2: "lg:px-2",
        4: "lg:px-4",
        6: "lg:px-6",
        8: "lg:px-8",
        16: "lg:px-16",
        24: "lg:px-24",
    },
    xl: {
        0: "xl:px-0",
        2: "xl:px-2",
        4: "xl:px-4",
        6: "xl:px-6",
        8: "xl:px-8",
        16: "xl:px-16",
        24: "xl:px-24",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'padding_x';

export function getPaddingXClasses(blok, {possiblePadding = possiblePaddingDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possiblePadding[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
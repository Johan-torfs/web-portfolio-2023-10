const possibleMarginDefault = {
    xs: {
        0: "my-0",
        2: "my-2",
        4: "my-4",
        6: "my-6",
        8: "my-8",
        16: "my-16",
        24: "my-24",
    },
    sm: {
        0: "sm:my-0",
        2: "sm:my-2",
        4: "sm:my-4",
        6: "sm:my-6",
        8: "sm:my-8",
        16: "sm:my-16",
        24: "sm:my-24",
    },
    md: {
        0: "md:my-0",
        2: "md:my-2",
        4: "md:my-4",
        6: "md:my-6",
        8: "md:my-8",
        16: "md:my-16",
        24: "md:my-24",
    },
    lg: {
        0: "lg:my-0",
        2: "lg:my-2",
        4: "lg:my-4",
        6: "lg:my-6",
        8: "lg:my-8",
        16: "lg:my-16",
        24: "lg:my-24",
    },
    xl: {
        0: "xl:my-0",
        2: "xl:my-2",
        4: "xl:my-4",
        6: "xl:my-6",
        8: "xl:my-8",
        16: "xl:my-16",
        24: "xl:my-24",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'margin_y';

export function getMarginYClasses(blok, {possibleMargin = possibleMarginDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleMargin[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
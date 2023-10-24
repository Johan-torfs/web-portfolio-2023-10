const possibleGapDefault = {
    xs: {
        0: "gap-0",
        2: "gap-2",
        4: "gap-4",
        6: "gap-6",
        8: "gap-8",
        16: "gap-16",
        24: "gap-24",
    },
    sm: {
        0: "sm:gap-0",
        2: "sm:gap-2",
        4: "sm:gap-4",
        6: "sm:gap-6",
        8: "sm:gap-8",
        16: "sm:gap-16",
        24: "sm:gap-24",
    },
    md: {
        0: "md:gap-0",
        2: "md:gap-2",
        4: "md:gap-4",
        6: "md:gap-6",
        8: "md:gap-8",
        16: "md:gap-16",
        24: "md:gap-24",
    },
    lg: {
        0: "lg:gap-0",
        2: "lg:gap-2",
        4: "lg:gap-4",
        6: "lg:gap-6",
        8: "lg:gap-8",
        16: "lg:gap-16",
        24: "lg:gap-24",
    },
    xl: {
        0: "xl:gap-0",
        2: "xl:gap-2",
        4: "xl:gap-4",
        6: "xl:gap-6",
        8: "xl:gap-8",
        16: "xl:gap-16",
        24: "xl:gap-24",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'gap';

export function getGapClasses(blok, {possibleGap = possibleGapDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleGap[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
const possibleJustifyContentDefault = {
    xs: {
        "center": "justify-center",
        "start": "justify-start",
        "end": "justify-end",
        "between": "justify-between",
        "around": "justify-around",
        "evenly": "justify-evenly",
        "auto": "justify-auto",
    },
    sm: {
        "center": "sm:justify-center",
        "start": "sm:justify-start",
        "end": "sm:justify-end",
        "between": "sm:justify-between",
        "around": "sm:justify-around",
        "evenly": "sm:justify-evenly",
        "auto": "sm:justify-auto",
    },
    md: {
        "center": "md:justify-center",
        "start": "md:justify-start",
        "end": "md:justify-end",
        "between": "md:justify-between",
        "around": "md:justify-around",
        "evenly": "md:justify-evenly",
        "auto": "md:justify-auto",
    },
    lg: {
        "center": "lg:justify-center",
        "start": "lg:justify-start",
        "end": "lg:justify-end",
        "between": "lg:justify-between",
        "around": "lg:justify-around",
        "evenly": "lg:justify-evenly",
        "auto": "lg:justify-auto",
    },
    xl: {
        "center": "xl:justify-center",
        "start": "xl:justify-start",
        "end": "xl:justify-end",
        "between": "xl:justify-between",
        "around": "xl:justify-around",
        "evenly": "xl:justify-evenly",
        "auto": "xl:justify-auto",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'justify_content';

export function getJustifyContentClasses(blok, {possibleJustifyContent = possibleJustifyContentDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleJustifyContent[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
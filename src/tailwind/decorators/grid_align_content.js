const possibleAlignContentDefault = {
    xs: {
        "center": "content-center",
        "start": "content-start",
        "end": "content-end",
        "between": "content-between",
        "around": "content-around",
        "evenly": "content-evenly",
        "auto": "content-auto",
    },
    sm: {
        "center": "sm:content-center",
        "start": "sm:content-start",
        "end": "sm:content-end",
        "between": "sm:content-between",
        "around": "sm:content-around",
        "evenly": "sm:content-evenly",
        "auto": "sm:content-auto",
    },
    md: {
        "center": "md:content-center",
        "start": "md:content-start",
        "end": "md:content-end",
        "between": "md:content-between",
        "around": "md:content-around",
        "evenly": "md:content-evenly",
        "auto": "md:content-auto",
    },
    lg: {
        "center": "lg:content-center",
        "start": "lg:content-start",
        "end": "lg:content-end",
        "between": "lg:content-between",
        "around": "lg:content-around",
        "evenly": "lg:content-evenly",
        "auto": "lg:content-auto",
    },
    xl: {
        "center": "xl:content-center",
        "start": "xl:content-start",
        "end": "xl:content-end",
        "between": "xl:content-between",
        "around": "xl:content-around",
        "evenly": "xl:content-evenly",
        "auto": "xl:content-auto",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'align_content';

export function getAlignContentClasses(blok, {possibleAlignContent = possibleAlignContentDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleAlignContent[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
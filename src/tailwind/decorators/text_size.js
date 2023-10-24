const possibleFontSizeDefault = {
    xs: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
    },
    sm: {
        xs: "sm:text-xs",
        sm: "sm:text-sm",
        base: "sm:text-base",
        lg: "sm:text-lg",
        xl: "sm:text-xl",
        "2xl": "sm:text-2xl",
        "3xl": "sm:text-3xl",
        "4xl": "sm:text-4xl",
        "5xl": "sm:text-5xl",
        "6xl": "sm:text-6xl",
    },
    md: {
        xs: "md:text-xs",
        sm: "md:text-sm",
        base: "md:text-base",
        lg: "md:text-lg",
        xl: "md:text-xl",
        "2xl": "md:text-2xl",
        "3xl": "md:text-3xl",
        "4xl": "md:text-4xl",
        "5xl": "md:text-5xl",
        "6xl": "md:text-6xl",
    },
    lg: {
        xs: "lg:text-xs",
        sm: "lg:text-sm",
        base: "lg:text-base",
        lg: "lg:text-lg",
        xl: "lg:text-xl",
        "2xl": "lg:text-2xl",
        "3xl": "lg:text-3xl",
        "4xl": "lg:text-4xl",
        "5xl": "lg:text-5xl",
        "6xl": "lg:text-6xl",
    },
    xl: {
        xs: "xl:text-xs",
        sm: "xl:text-sm",
        base: "xl:text-base",
        lg: "xl:text-lg",
        xl: "xl:text-xl",
        "2xl": "xl:text-2xl",
        "3xl": "xl:text-3xl",
        "4xl": "xl:text-4xl",
        "5xl": "xl:text-5xl",
        "6xl": "xl:text-6xl",
    },
};

const possibleFontSizePerTag = {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-4xl",
    h3: "text-xl",
}

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'font_size';
const tagNameDefault = 'type';

export function getFontSizeClasses(blok, {possibleFontSize = possibleFontSizeDefault, screenSizes = screenSizesDefault, name = nameDefault, tagName = tagNameDefault} = {}) {
    const className = `
        ${blok[name] ? screenSizes.sizes.map((screen) => (blok[name][screen] ? possibleFontSize[screen][blok[name][screen]] : '')).join(' ') : (blok[tagName] ? possibleFontSizePerTag[blok[tagName]] || '' : '')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
const possibleTextMaxWidthDefault = {
    xs: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "text-4xl",
        full: "max-w-full",
        prose: "max-w-prose",
        fit: "max-w-fit",
    },
    sm: {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
        "3xl": "sm:max-w-3xl",
        "4xl": "sm:text-4xl",
        full: "sm:max-w-full",
        prose: "sm:max-w-prose",
        fit: "sm:max-w-fit",
    },
    md: {
        sm: "md:max-w-sm",
        md: "md:max-w-md",
        lg: "md:max-w-lg",
        xl: "md:max-w-xl",
        "2xl": "md:max-w-2xl",
        "3xl": "md:max-w-3xl",
        "4xl": "md:text-4xl",
        full: "md:max-w-full",
        prose: "md:max-w-prose",
        fit: "md:max-w-fit",
    },
    lg: {
        sm: "lg:max-w-sm",
        md: "lg:max-w-md",
        lg: "lg:max-w-lg",
        xl: "lg:max-w-xl",
        "2xl": "lg:max-w-2xl",
        "3xl": "lg:max-w-3xl",
        "4xl": "lg:text-4xl",
        full: "lg:max-w-full",
        prose: "lg:max-w-prose",
        fit: "lg:max-w-fit",
    },
    xl: {
        sm: "xl:max-w-sm",
        md: "xl:max-w-md",
        lg: "xl:max-w-lg",
        xl: "xl:max-w-xl",
        "2xl": "xl:max-w-2xl",
        "3xl": "xl:max-w-3xl",
        "4xl": "xl:text-4xl",
        full: "xl:max-w-full",
        prose: "xl:max-w-prose",
        fit: "xl:max-w-fit",
    },
};

const possibleTextWidthDefault = {
    xs: {
        sm: "w-sm",
        md: "w-md",
        lg: "w-lg",
        xl: "w-xl",
        "2xl": "w-2xl",
        "3xl": "w-3xl",
        "4xl": "text-4xl",
        full: "w-full",
        prose: "w-prose",
        fit: "w-fit",
    },
    sm: {
        sm: "sm:w-sm",
        md: "sm:w-md",
        lg: "sm:w-lg",
        xl: "sm:w-xl",
        "2xl": "sm:w-2xl",
        "3xl": "sm:w-3xl",
        "4xl": "sm:text-4xl",
        full: "sm:w-full",
        prose: "sm:w-prose",
        fit: "sm:w-fit",
    },
    md: {
        sm: "md:w-sm",
        md: "md:w-md",
        lg: "md:w-lg",
        xl: "md:w-xl",
        "2xl": "md:w-2xl",
        "3xl": "md:w-3xl",
        "4xl": "md:text-4xl",
        full: "md:w-full",
        prose: "md:w-prose",
        fit: "md:w-fit",
    },
    lg: {
        sm: "lg:w-sm",
        md: "lg:w-md",
        lg: "lg:w-lg",
        xl: "lg:w-xl",
        "2xl": "lg:w-2xl",
        "3xl": "lg:w-3xl",
        "4xl": "lg:text-4xl",
        full: "lg:w-full",
        prose: "lg:w-prose",
        fit: "lg:w-fit",
    },
    xl: {
        sm: "xl:w-sm",
        md: "xl:w-md",
        lg: "xl:w-lg",
        xl: "xl:w-xl",
        "2xl": "xl:w-2xl",
        "3xl": "xl:w-3xl",
        "4xl": "xl:text-4xl",
        full: "xl:w-full",
        prose: "xl:w-prose",
        fit: "xl:w-fit",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'max_width';

export function getTextMaxWidthClasses(blok, {possibleTextWidth = possibleTextMaxWidthDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) { 
    const className = `
        ${screenSizes.sizes.map((screen) => (
            blok[name] ? possibleTextWidth[screen][blok[name][screen]] : ''
        )).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}

const widthNameDefault = 'text_width';

export function getTextWidthClasses(blok, {possibleTextWidth = possibleTextWidthDefault, screenSizes = screenSizesDefault, name = widthNameDefault} = {}) { 
    const className = `
        ${screenSizes.sizes.map((screen) => (
            blok[name] ? possibleTextWidth[screen][blok[name][screen]] : ''
        )).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
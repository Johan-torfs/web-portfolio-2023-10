const possiblePaddingX = {
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

const possiblePaddingY = {
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

const possibleMarginX = {
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

const possibleMarginY = {
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

const screenSizes = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

export function getPaddingClasses(blok) {
    const paddingX = {
        xs: blok.padding_x,
        sm: blok.padding_x_sm,
        md: blok.padding_x_md,
        lg: blok.padding_x_lg,
        xl: blok.padding_x_xl,
    };
    
    const paddingY = {
        xs: blok.padding_y,
        sm: blok.padding_y_sm,
        md: blok.padding_y_md,
        lg: blok.padding_y_lg,
        xl: blok.padding_y_xl,
    };
    
    const marginX = {
        xs: blok.margin_x,
        sm: blok.margin_x_sm,
        md: blok.margin_x_md,
        lg: blok.margin_x_lg,
        xl: blok.margin_x_xl,
    };
    
    const marginY = {
        xs: blok.margin_y,
        sm: blok.margin_y_sm,
        md: blok.margin_y_md,
        lg: blok.margin_y_lg,
        xl: blok.margin_y_xl,
    };
    
    const className = `
        ${screenSizes.sizes.map((screen) => possiblePaddingX[screen][paddingX[screen]]).join(' ')}
        ${screenSizes.sizes.map((screen) => possiblePaddingY[screen][paddingY[screen]]).join(' ')}
        ${screenSizes.sizes.map((screen) => possibleMarginX[screen][marginX[screen]]).join(' ')}
        ${screenSizes.sizes.map((screen) => possibleMarginY[screen][marginY[screen]]).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
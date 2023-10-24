const possibleColumnsDefault = {
    xs: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
    },
    sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
    },
    md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
    },
    lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
    },
    xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'grid_columns';

export function getColumnsClasses(blok, {possibleColumns = possibleColumnsDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleColumns[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}
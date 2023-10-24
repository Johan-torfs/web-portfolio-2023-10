const possibleFromVisibilityDefault = {
    block: {
        xs: 'xs:block',
        sm: 'sm:block',
        md: 'md:block',
        lg: 'lg:block',
        xl: 'xl:block',
        default: '',
    },
    inline: {
        xs: 'xs:inline',
        sm: 'sm:inline',
        md: 'md:inline',
        lg: 'lg:inline',
        xl: 'xl:inline',
        default: '',
    },
    flex: {
        xs: 'xs:flex',
        sm: 'sm:flex',
        md: 'md:flex',
        lg: 'lg:flex',
        xl: 'xl:flex',
        default: '',
    },
    grid: {
        xs: 'xs:grid',
        sm: 'sm:grid',
        md: 'md:grid',
        lg: 'lg:grid',
        xl: 'xl:grid',
        default: '',
    },
    table: {
        xs: 'xs:table',
        sm: 'sm:table',
        md: 'md:table',
        lg: 'lg:table',
        xl: 'xl:table',
        default: '',
    },
}

const possibleToVisibilityDefault = {
    xs: 'sm:hidden',
    sm: 'md:hidden',
    md: 'lg:hidden', 
    lg: 'xl:hidden',
    xl: '',
    default: '',
}

const fromNameDefault = 'from';
const toNameDefault = 'to';
const displayDefault = 'block';

export function getVisibilityClasses(blok, {fromName = fromNameDefault, toName = toNameDefault, display = displayDefault} = {}) {
    if (!blok[fromName]) blok[fromName] = 'xs';
    if (!blok[toName]) blok[toName] = 'xl';

    if (blok[fromName] == 'xs' && blok[toName] == 'xl') return '';

    if (blok[fromName] == 'xs') return possibleToVisibilityDefault[blok[toName]];

    return `hidden ${possibleFromVisibilityDefault[display][blok[fromName]]} ${possibleToVisibilityDefault[blok[toName]]}`;
}
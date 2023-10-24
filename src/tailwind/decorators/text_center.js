const nameDefault = 'text_center';

export function getTextCenterClasses(blok, {name = nameDefault} = {}) {    
    const className = blok[name] ? 'text-center' : '';
    return className;
}
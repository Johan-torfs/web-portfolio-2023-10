import { GuardScreensizes, type ScreenSize } from "./guards/Guard";


export interface TextFont {
    font?: "sans" | "montserrat" | "fraunces";
}



const textSize = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
const textSizeGuardClass: GuardScreensizes = new GuardScreensizes(textSize);
export const textSizeGuard = (x: any) => textSizeGuardClass.guard(x);

export interface TextSize {
    font_size?: ScreenSize<(typeof textSize)[number]>;
}


export const isTextCenterType = (x: any) => (typeof x === "boolean");
export const textCenterGuard = (x: any) => {
    if (isTextCenterType(x)) return x;
    return undefined;
}
export interface TextCenter {
    text_center?: boolean;
}


const textWidth = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full", "prose", "fit"];
const textWidthGuardClass: GuardScreensizes = new GuardScreensizes(textWidth);
export const textWidthGuard = (x: any) => textWidthGuardClass.guard(x);

export interface TextMaxWidth {
    max_width?: ScreenSize<(typeof textWidth)[number]>;
}

export interface TextWidth {
    text_width?: ScreenSize<(typeof textWidth)[number]>;
}


export interface TextDecoration {
    text_decoration?: "underline" | "line-through" | "overline" | "none";
}


export interface TextUpperCase {
    text_uppercase?: boolean;
}
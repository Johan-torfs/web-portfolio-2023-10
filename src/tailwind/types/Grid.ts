import { GuardScreensizes, type ScreenSize } from "./guards/Guard";

const content = ['center', 'start', 'end', 'between', 'around', 'evenly', 'auto', 'default'];
const contentGuardClass: GuardScreensizes = new GuardScreensizes(content);
export const contentGuard = (x: any) => contentGuardClass.guard(x);

const items = ['center', 'start', 'end', 'stretch', 'baseline', 'auto', 'default'];
const itemsGuardClass: GuardScreensizes = new GuardScreensizes(items);
export const itemsGuard = (x: any) => itemsGuardClass.guard(x);

export interface JustifyContent {
    justify_content?: ScreenSize<(typeof content)[number]>;
}

export interface JustifyItems {
    justify_items?: ScreenSize<(typeof items)[number]>;
}

export interface AlignContent {
    align_content?: ScreenSize<(typeof content)[number]>;
}

export interface AlignItems {
    align_items?: ScreenSize<(typeof items)[number]>;
}

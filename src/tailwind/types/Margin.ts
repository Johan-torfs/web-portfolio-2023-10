import { GuardScreensizes, type ScreenSize } from "./guards/Guard";

const margin = ['0', '2', '4', '6', '8', '16', '24'];
const marginGuardClass: GuardScreensizes = new GuardScreensizes(margin);
export const marginGuard = (x: any) => marginGuardClass.guard(x);

export interface MarginX {
    margin_x?: ScreenSize<(typeof margin)[number]>;
}

export interface MarginY {
    margin_y?: ScreenSize<(typeof margin)[number]>;
}

export interface MarginBottom {
    margin_bottom?: ScreenSize<(typeof margin)[number]>;
}
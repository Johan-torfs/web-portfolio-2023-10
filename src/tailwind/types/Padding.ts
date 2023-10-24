import { GuardScreensizes, type ScreenSize } from "./guards/Guard";

const padding = ['0', '2', '4', '6', '8', '16', '24'];
const paddingGuardClass: GuardScreensizes = new GuardScreensizes(padding);
export const paddingGuard = (x: any) => paddingGuardClass.guard(x);

export interface PaddingX {
    padding_x?: ScreenSize<(typeof padding)[number]>;
}

export interface PaddingY {
    padding_y?: ScreenSize<(typeof padding)[number]>;
}
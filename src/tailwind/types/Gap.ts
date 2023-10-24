import { GuardScreensizes, type ScreenSize } from "./guards/Guard";

const gap = ['0', '2', '4', '6', '8', '16', '24'];
const gapGuardClass: GuardScreensizes = new GuardScreensizes(gap);
export const gapGuard = (x: any) => gapGuardClass.guard(x);

export interface Gap {
    gap?: ScreenSize<(typeof gap)[number]>;
}
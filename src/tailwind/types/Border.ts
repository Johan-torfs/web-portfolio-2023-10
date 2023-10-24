import { GuardScreensizes, GuardUnion, type ScreenSize } from "./guards/Guard";

const borderRadiusPosition = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
const borderRadiusPositionGuardClass: GuardScreensizes = new GuardScreensizes(borderRadiusPosition);
export const borderRadiusPositionGuard = (x: any) => borderRadiusPositionGuardClass.guard(x);

const borderRadiusSize = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const borderRadiusSizeGuardClass: GuardUnion = new GuardUnion(borderRadiusSize);
export const borderRadiusSizeGuard = (x: any) => borderRadiusSizeGuardClass.guard(x);

export interface BorderRadius {
    border_radius_size?: (typeof borderRadiusSize)[number];
    border_radius_position?: ScreenSize<(typeof borderRadiusPosition)[number]>;
}

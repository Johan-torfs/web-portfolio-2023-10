import { GuardScreensizes, type ScreenSize } from "./guards/Guard";

const columns = ['1', '2', '3', '4', '5', '6'];
const columnsGuardClass: GuardScreensizes = new GuardScreensizes(columns);
export const columnsGuard = (x: any) => columnsGuardClass.guard(x);

export interface Columns {
    grid_columns?: ScreenSize<(typeof columns)[number]>;
}

export interface ColSpan {
    col_span?: ScreenSize<(typeof columns)[number]>;
}
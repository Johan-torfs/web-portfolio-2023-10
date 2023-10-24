import { GuardUnion } from "./guards/Guard";

const visibility = ["xs", "sm", "md", "lg", "xl"];
const visibilityGuardClass: GuardUnion = new GuardUnion(visibility);
export const visibilityGuard = (x: any) => visibilityGuardClass.guard(x);

export interface Visibility {
    from?: (typeof visibility)[number];
    to?: (typeof visibility)[number];
}
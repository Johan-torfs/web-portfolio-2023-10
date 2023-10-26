export const isAnimateOnScrollType = (x: any) => (typeof x === "boolean");
export const animateOnScrollGuard = (x: any) => {
    if (isAnimateOnScrollType(x)) return x;
    return undefined;
}
export interface AnimateOnScroll {
    animate_on_scroll?: boolean;
}
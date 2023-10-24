export interface ScreenSize<T> {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}

export class GuardScreensizes {
    constructor(private values: string[]) {
        this.values = values.map(x => x.toString());
    }

    private isValue(x: any): x is (typeof this.values)[number] {
        return [...this.values, ''].includes(x.toString());
    }

    private isType(x: any) {
        if (typeof x !== "object") return false;
        
        if (('xs' in x) && !this.isValue(x.xs)) return false;
        if (('sm' in x) && !this.isValue(x.sm)) return false;
        if (('md' in x) && !this.isValue(x.md)) return false;
        if (('lg' in x) && !this.isValue(x.lg)) return false;
        if (('xl' in x) && !this.isValue(x.xl)) return false;
        return true;
    }

    guard(x: any) {
        if (this.isType(x)) return x;
        return undefined;
    }
}

export class GuardUnion {
    constructor(private values: string[]) {
        this.values = values;
    }

    private isType(x: any): x is (typeof this.values)[number] {
        return [...this.values, ''].includes(x);
    }

    guard(x: any) {
        if (this.isType(x)) return x;
        return undefined;
    }
}
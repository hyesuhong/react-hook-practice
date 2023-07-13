/// <reference types="react" />
export type IntersectionCB = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
interface IntersectionOption {
    root?: HTMLElement;
    rootMargin?: {
        top: number | string;
        right: number | string;
        bottom: number | string;
        left: number | string;
    };
    thresholds?: number | number[];
}
export interface IUseIntersection extends IntersectionOption {
    callback: IntersectionCB;
}
export declare const useIntersection: <T extends HTMLElement>({ root, rootMargin, thresholds, callback, }: IUseIntersection) => {
    ref: import("react").RefObject<T>;
    observer: IntersectionObserver;
};
export {};

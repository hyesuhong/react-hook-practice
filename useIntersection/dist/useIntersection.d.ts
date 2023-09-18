/// <reference types="react" />
export type IntersectionHandler = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
type marginType = number | string;
export type IntersectionMargin = [marginType] | [marginType, marginType] | [marginType, marginType, marginType] | [marginType, marginType, marginType, marginType];
export interface IntersectionOption {
    root?: HTMLElement;
    rootMargin?: IntersectionMargin;
    thresholds?: number | number[];
}
export interface IUseIntersection extends IntersectionOption {
    callbackIntersection: IntersectionHandler;
}
export declare const useIntersection: <T extends HTMLElement>({ root, rootMargin, thresholds, callbackIntersection, }: IUseIntersection) => import("react").RefObject<T>;
export {};

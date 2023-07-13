"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = void 0;
var react_1 = require("react");
var useIntersection = function (_a) {
    var root = _a.root, rootMargin = _a.rootMargin, thresholds = _a.thresholds, callback = _a.callback;
    var ref = (0, react_1.useRef)(null);
    var marginString = rootMargin
        ? "".concat(typeof rootMargin.top === 'number'
            ? "".concat(rootMargin.top, "px")
            : rootMargin.top, " ").concat(typeof rootMargin.right === 'number'
            ? "".concat(rootMargin.right, "px")
            : rootMargin.right, " ").concat(typeof rootMargin.bottom === 'number'
            ? "".concat(rootMargin.bottom, "px")
            : rootMargin.bottom, " ").concat(typeof rootMargin.left === 'number'
            ? "".concat(rootMargin.left, "px")
            : rootMargin.left)
        : '0px 0px 0px 0px';
    var intersectionOpt = {
        root: root || null,
        rootMargin: marginString,
        threshold: thresholds || 0,
    };
    var observer = new IntersectionObserver(callback, intersectionOpt);
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        observer.observe(ref.current);
        return function () {
            observer.disconnect();
        };
    }, []);
    return { ref: ref, observer: observer };
};
exports.useIntersection = useIntersection;

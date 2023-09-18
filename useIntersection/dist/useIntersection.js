"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = void 0;
var react_1 = require("react");
var useIntersection = function (_a) {
    var root = _a.root, rootMargin = _a.rootMargin, thresholds = _a.thresholds, callbackIntersection = _a.callbackIntersection;
    var ref = (0, react_1.useRef)(null);
    var marginString = rootMargin ? getIntersectionMargin(rootMargin) : '0px';
    var intersectionOpt = (0, react_1.useMemo)(function () { return ({
        root: root || null,
        rootMargin: marginString,
        threshold: thresholds || 0,
    }); }, [marginString, root, thresholds]);
    var intersectionHandler = (0, react_1.useCallback)(callbackIntersection, [
        callbackIntersection,
    ]);
    (0, react_1.useEffect)(function () {
        var observer = !ref.current
            ? undefined
            : new IntersectionObserver(intersectionHandler, intersectionOpt);
        if (observer && ref.current)
            observer.observe(ref.current);
        return function () {
            observer && observer.disconnect();
        };
    }, [ref, intersectionHandler, intersectionOpt]);
    return ref;
};
exports.useIntersection = useIntersection;
var getIntersectionMargin = function (marginOption) {
    var setMarginAllString = marginOption.map(function (margin) {
        return typeof margin === 'number' ? "".concat(margin, "px") : margin;
    });
    return setMarginAllString.join(' ');
};

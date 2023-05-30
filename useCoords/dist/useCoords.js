"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCoords = void 0;
var react_1 = require("react");
function useCoords() {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(null), coords = _b[0], setCoords = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var onSuccess = function (success) {
        setCoords({
            latitude: success.coords.latitude,
            longitude: success.coords.longitude,
        });
        setLoading(false);
        setError(null);
    };
    var onError = function (error) {
        setLoading(false);
        setCoords(null);
        setError(error);
    };
    var getPosition = function () {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    return { loading: loading, coords: coords, error: error, getPosition: getPosition };
}
exports.useCoords = useCoords;

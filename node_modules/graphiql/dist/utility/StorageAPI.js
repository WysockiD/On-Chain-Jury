"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isQuotaError(storage, e) {
    return (e instanceof DOMException &&
        (e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        storage.length !== 0);
}
var StorageAPI = (function () {
    function StorageAPI(storage) {
        this.storage =
            storage || (typeof window !== 'undefined' ? window.localStorage : null);
    }
    StorageAPI.prototype.get = function (name) {
        if (this.storage) {
            var value = this.storage.getItem('graphiql:' + name);
            if (value === 'null' || value === 'undefined') {
                this.storage.removeItem('graphiql:' + name);
                return null;
            }
            if (value) {
                return value;
            }
        }
        return null;
    };
    StorageAPI.prototype.set = function (name, value) {
        var quotaError = false;
        var error = null;
        if (this.storage) {
            var key = "graphiql:" + name;
            if (value) {
                try {
                    this.storage.setItem(key, value);
                }
                catch (e) {
                    error = e;
                    quotaError = isQuotaError(this.storage, e);
                }
            }
            else {
                this.storage.removeItem(key);
            }
        }
        return {
            isQuotaError: quotaError,
            error: error,
        };
    };
    return StorageAPI;
}());
exports.default = StorageAPI;
//# sourceMappingURL=StorageAPI.js.map
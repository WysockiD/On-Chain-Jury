"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePreview = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
function tokenToURL(token) {
    if (token.type !== 'string') {
        return;
    }
    var value = token.string.slice(1).slice(0, -1).trim();
    try {
        var location_1 = window.location;
        return new URL(value, location_1.protocol + '//' + location_1.host);
    }
    catch (err) {
        return;
    }
}
function isImageURL(url) {
    return /(bmp|gif|jpeg|jpg|png|svg)$/.test(url.pathname);
}
var ImagePreview = (function (_super) {
    __extends(ImagePreview, _super);
    function ImagePreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._node = null;
        _this.state = {
            width: null,
            height: null,
            src: null,
            mime: null,
        };
        return _this;
    }
    ImagePreview.shouldRender = function (token) {
        var url = tokenToURL(token);
        return url ? isImageURL(url) : false;
    };
    ImagePreview.prototype.componentDidMount = function () {
        this._updateMetadata();
    };
    ImagePreview.prototype.componentDidUpdate = function () {
        this._updateMetadata();
    };
    ImagePreview.prototype.render = function () {
        var _this = this;
        var _a;
        var dims = null;
        if (this.state.width !== null && this.state.height !== null) {
            var dimensions = this.state.width + 'x' + this.state.height;
            if (this.state.mime !== null) {
                dimensions += ' ' + this.state.mime;
            }
            dims = react_1.default.createElement("div", null, dimensions);
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("img", { onLoad: function () { return _this._updateMetadata(); }, ref: function (node) {
                    _this._node = node;
                }, src: (_a = tokenToURL(this.props.token)) === null || _a === void 0 ? void 0 : _a.href }),
            dims));
    };
    ImagePreview.prototype._updateMetadata = function () {
        var _this = this;
        if (!this._node) {
            return;
        }
        var width = this._node.naturalWidth;
        var height = this._node.naturalHeight;
        var src = this._node.src;
        if (src !== this.state.src) {
            this.setState({ src: src });
            fetch(src, { method: 'HEAD' }).then(function (response) {
                _this.setState({
                    mime: response.headers.get('Content-Type'),
                });
            });
        }
        if (width !== this.state.width || height !== this.state.height) {
            this.setState({ height: height, width: width });
        }
    };
    ImagePreview.propTypes = {
        token: prop_types_1.default.any,
    };
    return ImagePreview;
}(react_1.default.Component));
exports.ImagePreview = ImagePreview;
//# sourceMappingURL=ImagePreview.js.map
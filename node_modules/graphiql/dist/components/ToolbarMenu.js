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
exports.ToolbarMenuItem = exports.ToolbarMenu = void 0;
var react_1 = __importDefault(require("react"));
var ToolbarMenu = (function (_super) {
    __extends(ToolbarMenu, _super);
    function ToolbarMenu(props) {
        var _this = _super.call(this, props) || this;
        _this._node = null;
        _this._listener = null;
        _this.handleOpen = function (e) {
            preventDefault(e);
            _this.setState({ visible: true });
            _this._subscribe();
        };
        _this.state = { visible: false };
        return _this;
    }
    ToolbarMenu.prototype.componentWillUnmount = function () {
        this._release();
    };
    ToolbarMenu.prototype.render = function () {
        var _this = this;
        var visible = this.state.visible;
        return (react_1.default.createElement("a", { className: "toolbar-menu toolbar-button", onClick: this.handleOpen.bind(this), onMouseDown: preventDefault, ref: function (node) {
                if (node) {
                    _this._node = node;
                }
            }, title: this.props.title },
            this.props.label,
            react_1.default.createElement("svg", { width: "14", height: "8" },
                react_1.default.createElement("path", { fill: "#666", d: "M 5 1.5 L 14 1.5 L 9.5 7 z" })),
            react_1.default.createElement("ul", { className: 'toolbar-menu-items' + (visible ? ' open' : '') }, this.props.children)));
    };
    ToolbarMenu.prototype._subscribe = function () {
        if (!this._listener) {
            this._listener = this.handleClick.bind(this);
            document.addEventListener('click', this._listener);
        }
    };
    ToolbarMenu.prototype._release = function () {
        if (this._listener) {
            document.removeEventListener('click', this._listener);
            this._listener = null;
        }
    };
    ToolbarMenu.prototype.handleClick = function (e) {
        if (this._node !== e.target) {
            e.preventDefault();
            this.setState({ visible: false });
            this._release();
        }
    };
    return ToolbarMenu;
}(react_1.default.Component));
exports.ToolbarMenu = ToolbarMenu;
exports.ToolbarMenuItem = function (_a) {
    var onSelect = _a.onSelect, title = _a.title, label = _a.label;
    return (react_1.default.createElement("li", { onMouseOver: function (e) {
            e.currentTarget.className = 'hover';
        }, onMouseOut: function (e) {
            e.currentTarget.className = '';
        }, onMouseDown: preventDefault, onMouseUp: onSelect, title: title }, label));
};
function preventDefault(e) {
    e.preventDefault();
}
//# sourceMappingURL=ToolbarMenu.js.map
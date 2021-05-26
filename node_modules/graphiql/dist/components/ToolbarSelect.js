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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarSelectOption = exports.ToolbarSelect = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
function hasProps(child) {
    if (!child || typeof child !== 'object' || !('props' in child)) {
        return false;
    }
    return true;
}
var ToolbarSelect = (function (_super) {
    __extends(ToolbarSelect, _super);
    function ToolbarSelect(props) {
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
    ToolbarSelect.prototype.componentWillUnmount = function () {
        this._release();
    };
    ToolbarSelect.prototype.render = function () {
        var _this = this;
        var selectedChild;
        var visible = this.state.visible;
        var optionChildren = react_1.default.Children.map(this.props.children, function (child, i) {
            if (!hasProps(child)) {
                return null;
            }
            if (!selectedChild || child.props.selected) {
                selectedChild = child;
            }
            var onChildSelect = child.props.onSelect ||
                (_this.props.onSelect &&
                    _this.props.onSelect.bind(null, child.props.value, i));
            return (react_1.default.createElement(ToolbarSelectOption, __assign({}, child.props, { onSelect: onChildSelect })));
        });
        return (react_1.default.createElement("a", { className: "toolbar-select toolbar-button", onClick: this.handleOpen.bind(this), onMouseDown: preventDefault, ref: function (node) {
                _this._node = node;
            }, title: this.props.title }, selectedChild === null || selectedChild === void 0 ? void 0 :
            selectedChild.props.label,
            react_1.default.createElement("svg", { width: "13", height: "10" },
                react_1.default.createElement("path", { fill: "#666", d: "M 5 5 L 13 5 L 9 1 z" }),
                react_1.default.createElement("path", { fill: "#666", d: "M 5 6 L 13 6 L 9 10 z" })),
            react_1.default.createElement("ul", { className: 'toolbar-select-options' + (visible ? ' open' : '') }, optionChildren)));
    };
    ToolbarSelect.prototype._subscribe = function () {
        if (!this._listener) {
            this._listener = this.handleClick.bind(this);
            document.addEventListener('click', this._listener);
        }
    };
    ToolbarSelect.prototype._release = function () {
        if (this._listener) {
            document.removeEventListener('click', this._listener);
            this._listener = null;
        }
    };
    ToolbarSelect.prototype.handleClick = function (e) {
        if (this._node !== e.target) {
            preventDefault(e);
            this.setState({ visible: false });
            this._release();
        }
    };
    return ToolbarSelect;
}(react_1.default.Component));
exports.ToolbarSelect = ToolbarSelect;
function ToolbarSelectOption(_a) {
    var onSelect = _a.onSelect, label = _a.label, selected = _a.selected;
    return (react_1.default.createElement("li", { onMouseOver: function (e) {
            e.currentTarget.className = 'hover';
        }, onMouseOut: function (e) {
            e.currentTarget.className = '';
        }, onMouseDown: preventDefault, onMouseUp: onSelect },
        label,
        selected && (react_1.default.createElement("svg", { width: "13", height: "13" },
            react_1.default.createElement("polygon", { points: "4.851,10.462 0,5.611 2.314,3.297 4.851,5.835\n    10.686,0 13,2.314 4.851,10.462" })))));
}
exports.ToolbarSelectOption = ToolbarSelectOption;
ToolbarSelectOption.propTypes = {
    onSelect: prop_types_1.default.func,
    selected: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    value: prop_types_1.default.any,
};
function preventDefault(e) {
    e.preventDefault();
}
//# sourceMappingURL=ToolbarSelect.js.map
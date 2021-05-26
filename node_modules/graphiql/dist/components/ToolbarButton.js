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
exports.ToolbarButton = void 0;
var react_1 = __importDefault(require("react"));
var ToolbarButton = (function (_super) {
    __extends(ToolbarButton, _super);
    function ToolbarButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            try {
                _this.props.onClick();
                _this.setState({ error: null });
            }
            catch (error) {
                _this.setState({ error: error });
            }
        };
        _this.state = { error: null };
        return _this;
    }
    ToolbarButton.prototype.render = function () {
        var error = this.state.error;
        return (react_1.default.createElement("button", { className: 'toolbar-button' + (error ? ' error' : ''), onClick: this.handleClick, title: error ? error.message : this.props.title, "aria-invalid": error ? 'true' : 'false' }, this.props.label));
    };
    return ToolbarButton;
}(react_1.default.Component));
exports.ToolbarButton = ToolbarButton;
//# sourceMappingURL=ToolbarButton.js.map
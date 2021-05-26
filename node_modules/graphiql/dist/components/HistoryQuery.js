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
var react_1 = __importDefault(require("react"));
var HistoryQuery = (function (_super) {
    __extends(HistoryQuery, _super);
    function HistoryQuery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editable: false,
        };
        _this.editField = null;
        return _this;
    }
    HistoryQuery.prototype.render = function () {
        var _this = this;
        var _a;
        var displayName = this.props.label ||
            this.props.operationName || ((_a = this.props.query) === null || _a === void 0 ? void 0 : _a.split('\n').filter(function (line) { return line.indexOf('#') !== 0; }).join(''));
        var starIcon = this.props.favorite ? '\u2605' : '\u2606';
        return (react_1.default.createElement("li", { className: this.state.editable ? 'editable' : undefined },
            this.state.editable ? (react_1.default.createElement("input", { type: "text", defaultValue: this.props.label, ref: function (c) {
                    _this.editField = c;
                }, onBlur: this.handleFieldBlur.bind(this), onKeyDown: this.handleFieldKeyDown.bind(this), placeholder: "Type a label" })) : (react_1.default.createElement("button", { className: "history-label", onClick: this.handleClick.bind(this) }, displayName)),
            react_1.default.createElement("button", { onClick: this.handleEditClick.bind(this), "aria-label": "Edit label" }, '\u270e'),
            react_1.default.createElement("button", { className: this.props.favorite ? 'favorited' : undefined, onClick: this.handleStarClick.bind(this), "aria-label": this.props.favorite ? 'Remove favorite' : 'Add favorite' }, starIcon)));
    };
    HistoryQuery.prototype.handleClick = function () {
        this.props.onSelect(this.props.query, this.props.variables, this.props.headers, this.props.operationName, this.props.label);
    };
    HistoryQuery.prototype.handleStarClick = function (e) {
        e.stopPropagation();
        this.props.handleToggleFavorite(this.props.query, this.props.variables, this.props.headers, this.props.operationName, this.props.label, this.props.favorite);
    };
    HistoryQuery.prototype.handleFieldBlur = function (e) {
        e.stopPropagation();
        this.setState({ editable: false });
        this.props.handleEditLabel(this.props.query, this.props.variables, this.props.headers, this.props.operationName, e.target.value, this.props.favorite);
    };
    HistoryQuery.prototype.handleFieldKeyDown = function (e) {
        if (e.keyCode === 13) {
            e.stopPropagation();
            this.setState({ editable: false });
            this.props.handleEditLabel(this.props.query, this.props.variables, this.props.headers, this.props.operationName, e.currentTarget.value, this.props.favorite);
        }
    };
    HistoryQuery.prototype.handleEditClick = function (e) {
        var _this = this;
        e.stopPropagation();
        this.setState({ editable: true }, function () {
            if (_this.editField) {
                _this.editField.focus();
            }
        });
    };
    return HistoryQuery;
}(react_1.default.Component));
exports.default = HistoryQuery;
//# sourceMappingURL=HistoryQuery.js.map
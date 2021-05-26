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
var debounce_1 = __importDefault(require("../../utility/debounce"));
var SearchBox = (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var value = event.currentTarget.value;
            _this.setState({ value: value });
            _this.debouncedOnSearch(value);
        };
        _this.handleClear = function () {
            _this.setState({ value: '' });
            _this.props.onSearch('');
        };
        _this.state = { value: props.value || '' };
        _this.debouncedOnSearch = debounce_1.default(200, _this.props.onSearch);
        return _this;
    }
    SearchBox.prototype.render = function () {
        return (react_1.default.createElement("label", { className: "search-box" },
            react_1.default.createElement("div", { className: "search-box-icon", "aria-hidden": "true" }, '\u26b2'),
            react_1.default.createElement("input", { value: this.state.value, onChange: this.handleChange, type: "text", placeholder: this.props.placeholder, "aria-label": this.props.placeholder }),
            this.state.value && (react_1.default.createElement("button", { className: "search-box-clear", onClick: this.handleClear, "aria-label": "Clear search input" }, '\u2715'))));
    };
    return SearchBox;
}(react_1.default.Component));
exports.default = SearchBox;
//# sourceMappingURL=SearchBox.js.map
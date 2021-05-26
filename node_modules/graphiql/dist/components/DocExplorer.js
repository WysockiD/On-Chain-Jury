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
exports.DocExplorer = void 0;
var react_1 = __importDefault(require("react"));
var graphql_1 = require("graphql");
var FieldDoc_1 = __importDefault(require("./DocExplorer/FieldDoc"));
var SchemaDoc_1 = __importDefault(require("./DocExplorer/SchemaDoc"));
var SearchBox_1 = __importDefault(require("./DocExplorer/SearchBox"));
var SearchResults_1 = __importDefault(require("./DocExplorer/SearchResults"));
var TypeDoc_1 = __importDefault(require("./DocExplorer/TypeDoc"));
var initialNav = {
    name: 'Schema',
    title: 'Documentation Explorer',
};
var DocExplorer = (function (_super) {
    __extends(DocExplorer, _super);
    function DocExplorer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleNavBackClick = function () {
            if (_this.state.navStack.length > 1) {
                _this.setState({ navStack: _this.state.navStack.slice(0, -1) });
            }
        };
        _this.handleClickType = function (type) {
            _this.showDoc(type);
        };
        _this.handleClickField = function (field) {
            _this.showDoc(field);
        };
        _this.handleSearch = function (value) {
            _this.showSearch(value);
        };
        _this.state = { navStack: [initialNav] };
        return _this;
    }
    DocExplorer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.schema !== nextProps.schema ||
            this.state.navStack !== nextState.navStack);
    };
    DocExplorer.prototype.render = function () {
        var schema = this.props.schema;
        var navStack = this.state.navStack;
        var navItem = navStack[navStack.length - 1];
        var content;
        if (schema === undefined) {
            content = (react_1.default.createElement("div", { className: "spinner-container" },
                react_1.default.createElement("div", { className: "spinner" })));
        }
        else if (!schema) {
            content = react_1.default.createElement("div", { className: "error-container" }, 'No Schema Available');
        }
        else if (navItem.search) {
            content = (react_1.default.createElement(SearchResults_1.default, { searchValue: navItem.search, withinType: navItem.def, schema: schema, onClickType: this.handleClickType, onClickField: this.handleClickField }));
        }
        else if (navStack.length === 1) {
            content = (react_1.default.createElement(SchemaDoc_1.default, { schema: schema, onClickType: this.handleClickType }));
        }
        else if (graphql_1.isType(navItem.def)) {
            content = (react_1.default.createElement(TypeDoc_1.default, { schema: schema, type: navItem.def, onClickType: this.handleClickType, onClickField: this.handleClickField }));
        }
        else {
            content = (react_1.default.createElement(FieldDoc_1.default, { field: navItem.def, onClickType: this.handleClickType }));
        }
        var shouldSearchBoxAppear = navStack.length === 1 ||
            (graphql_1.isType(navItem.def) && 'getFields' in navItem.def);
        var prevName;
        if (navStack.length > 1) {
            prevName = navStack[navStack.length - 2].name;
        }
        return (react_1.default.createElement("section", { className: "doc-explorer", key: navItem.name, "aria-label": "Documentation Explorer" },
            react_1.default.createElement("div", { className: "doc-explorer-title-bar" },
                prevName && (react_1.default.createElement("button", { className: "doc-explorer-back", onClick: this.handleNavBackClick, "aria-label": "Go back to " + prevName }, prevName)),
                react_1.default.createElement("div", { className: "doc-explorer-title" }, navItem.title || navItem.name),
                react_1.default.createElement("div", { className: "doc-explorer-rhs" }, this.props.children)),
            react_1.default.createElement("div", { className: "doc-explorer-contents" },
                shouldSearchBoxAppear && (react_1.default.createElement(SearchBox_1.default, { value: navItem.search, placeholder: "Search " + navItem.name + "...", onSearch: this.handleSearch })),
                content)));
    };
    DocExplorer.prototype.showDoc = function (typeOrField) {
        var navStack = this.state.navStack;
        var topNav = navStack[navStack.length - 1];
        if (topNav.def !== typeOrField) {
            this.setState({
                navStack: navStack.concat([
                    {
                        name: typeOrField.name,
                        def: typeOrField,
                    },
                ]),
            });
        }
    };
    DocExplorer.prototype.showDocForReference = function (reference) {
        if (reference && reference.kind === 'Type') {
            this.showDoc(reference.type);
        }
        else if (reference.kind === 'Field') {
            this.showDoc(reference.field);
        }
        else if (reference.kind === 'Argument' && reference.field) {
            this.showDoc(reference.field);
        }
        else if (reference.kind === 'EnumValue' && reference.type) {
            this.showDoc(reference.type);
        }
    };
    DocExplorer.prototype.showSearch = function (search) {
        var navStack = this.state.navStack.slice();
        var topNav = navStack[navStack.length - 1];
        navStack[navStack.length - 1] = __assign(__assign({}, topNav), { search: search });
        this.setState({ navStack: navStack });
    };
    DocExplorer.prototype.reset = function () {
        this.setState({ navStack: [initialNav] });
    };
    return DocExplorer;
}(react_1.default.Component));
exports.DocExplorer = DocExplorer;
//# sourceMappingURL=DocExplorer.js.map
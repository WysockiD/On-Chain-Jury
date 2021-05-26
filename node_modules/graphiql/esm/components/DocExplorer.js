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
import React from 'react';
import { isType } from 'graphql';
import FieldDoc from './DocExplorer/FieldDoc';
import SchemaDoc from './DocExplorer/SchemaDoc';
import SearchBox from './DocExplorer/SearchBox';
import SearchResults from './DocExplorer/SearchResults';
import TypeDoc from './DocExplorer/TypeDoc';
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
            content = (React.createElement("div", { className: "spinner-container" },
                React.createElement("div", { className: "spinner" })));
        }
        else if (!schema) {
            content = React.createElement("div", { className: "error-container" }, 'No Schema Available');
        }
        else if (navItem.search) {
            content = (React.createElement(SearchResults, { searchValue: navItem.search, withinType: navItem.def, schema: schema, onClickType: this.handleClickType, onClickField: this.handleClickField }));
        }
        else if (navStack.length === 1) {
            content = (React.createElement(SchemaDoc, { schema: schema, onClickType: this.handleClickType }));
        }
        else if (isType(navItem.def)) {
            content = (React.createElement(TypeDoc, { schema: schema, type: navItem.def, onClickType: this.handleClickType, onClickField: this.handleClickField }));
        }
        else {
            content = (React.createElement(FieldDoc, { field: navItem.def, onClickType: this.handleClickType }));
        }
        var shouldSearchBoxAppear = navStack.length === 1 ||
            (isType(navItem.def) && 'getFields' in navItem.def);
        var prevName;
        if (navStack.length > 1) {
            prevName = navStack[navStack.length - 2].name;
        }
        return (React.createElement("section", { className: "doc-explorer", key: navItem.name, "aria-label": "Documentation Explorer" },
            React.createElement("div", { className: "doc-explorer-title-bar" },
                prevName && (React.createElement("button", { className: "doc-explorer-back", onClick: this.handleNavBackClick, "aria-label": "Go back to " + prevName }, prevName)),
                React.createElement("div", { className: "doc-explorer-title" }, navItem.title || navItem.name),
                React.createElement("div", { className: "doc-explorer-rhs" }, this.props.children)),
            React.createElement("div", { className: "doc-explorer-contents" },
                shouldSearchBoxAppear && (React.createElement(SearchBox, { value: navItem.search, placeholder: "Search " + navItem.name + "...", onSearch: this.handleSearch })),
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
}(React.Component));
export { DocExplorer };
//# sourceMappingURL=DocExplorer.js.map
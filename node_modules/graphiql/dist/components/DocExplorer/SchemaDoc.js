"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TypeLink_1 = __importDefault(require("./TypeLink"));
var MarkdownContent_1 = __importDefault(require("./MarkdownContent"));
function SchemaDoc(_a) {
    var schema = _a.schema, onClickType = _a.onClickType;
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType && schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(MarkdownContent_1.default, { className: "doc-type-description", markdown: 'A GraphQL schema provides a root type for each kind of operation.' }),
        react_1.default.createElement("div", { className: "doc-category" },
            react_1.default.createElement("div", { className: "doc-category-title" }, 'root types'),
            react_1.default.createElement("div", { className: "doc-category-item" },
                react_1.default.createElement("span", { className: "keyword" }, 'query'),
                ': ',
                react_1.default.createElement(TypeLink_1.default, { type: queryType, onClick: onClickType })),
            mutationType && (react_1.default.createElement("div", { className: "doc-category-item" },
                react_1.default.createElement("span", { className: "keyword" }, 'mutation'),
                ': ',
                react_1.default.createElement(TypeLink_1.default, { type: mutationType, onClick: onClickType }))),
            subscriptionType && (react_1.default.createElement("div", { className: "doc-category-item" },
                react_1.default.createElement("span", { className: "keyword" }, 'subscription'),
                ': ',
                react_1.default.createElement(TypeLink_1.default, { type: subscriptionType, onClick: onClickType }))))));
}
exports.default = SchemaDoc;
//# sourceMappingURL=SchemaDoc.js.map
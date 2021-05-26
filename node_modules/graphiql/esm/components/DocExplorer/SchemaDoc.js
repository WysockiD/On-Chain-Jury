import React from 'react';
import TypeLink from './TypeLink';
import MarkdownContent from './MarkdownContent';
export default function SchemaDoc(_a) {
    var schema = _a.schema, onClickType = _a.onClickType;
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType && schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();
    return (React.createElement("div", null,
        React.createElement(MarkdownContent, { className: "doc-type-description", markdown: 'A GraphQL schema provides a root type for each kind of operation.' }),
        React.createElement("div", { className: "doc-category" },
            React.createElement("div", { className: "doc-category-title" }, 'root types'),
            React.createElement("div", { className: "doc-category-item" },
                React.createElement("span", { className: "keyword" }, 'query'),
                ': ',
                React.createElement(TypeLink, { type: queryType, onClick: onClickType })),
            mutationType && (React.createElement("div", { className: "doc-category-item" },
                React.createElement("span", { className: "keyword" }, 'mutation'),
                ': ',
                React.createElement(TypeLink, { type: mutationType, onClick: onClickType }))),
            subscriptionType && (React.createElement("div", { className: "doc-category-item" },
                React.createElement("span", { className: "keyword" }, 'subscription'),
                ': ',
                React.createElement(TypeLink, { type: subscriptionType, onClick: onClickType }))))));
}
//# sourceMappingURL=SchemaDoc.js.map
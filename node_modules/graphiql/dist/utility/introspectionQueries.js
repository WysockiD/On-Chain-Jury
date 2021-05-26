"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introspectionQuerySansSubscriptions = exports.introspectionQueryName = exports.staticName = exports.introspectionQuery = void 0;
var graphql_1 = require("graphql");
exports.introspectionQuery = graphql_1.getIntrospectionQuery();
exports.staticName = 'IntrospectionQuery';
exports.introspectionQueryName = exports.staticName;
exports.introspectionQuerySansSubscriptions = exports.introspectionQuery.replace('subscriptionType { name }', '');
//# sourceMappingURL=introspectionQueries.js.map
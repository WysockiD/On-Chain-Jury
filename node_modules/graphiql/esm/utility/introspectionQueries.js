import { getIntrospectionQuery } from 'graphql';
export var introspectionQuery = getIntrospectionQuery();
export var staticName = 'IntrospectionQuery';
export var introspectionQueryName = staticName;
export var introspectionQuerySansSubscriptions = introspectionQuery.replace('subscriptionType { name }', '');
//# sourceMappingURL=introspectionQueries.js.map
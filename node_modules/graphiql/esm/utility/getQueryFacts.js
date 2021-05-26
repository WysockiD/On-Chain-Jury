import { parse, typeFromAST, } from 'graphql';
export default function getQueryFacts(schema, documentStr) {
    if (!documentStr) {
        return;
    }
    var documentAST;
    try {
        documentAST = parse(documentStr);
    }
    catch (_a) {
        return;
    }
    var variableToType = schema
        ? collectVariables(schema, documentAST)
        : undefined;
    var operations = [];
    documentAST.definitions.forEach(function (def) {
        if (def.kind === 'OperationDefinition') {
            operations.push(def);
        }
    });
    return { variableToType: variableToType, operations: operations };
}
export function collectVariables(schema, documentAST) {
    var variableToType = Object.create(null);
    documentAST.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            var variableDefinitions = definition.variableDefinitions;
            if (variableDefinitions) {
                variableDefinitions.forEach(function (_a) {
                    var variable = _a.variable, type = _a.type;
                    var inputType = typeFromAST(schema, type);
                    if (inputType) {
                        variableToType[variable.name.value] = inputType;
                    }
                });
            }
        }
    });
    return variableToType;
}
//# sourceMappingURL=getQueryFacts.js.map
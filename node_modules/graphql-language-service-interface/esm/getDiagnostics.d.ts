import { DocumentNode, GraphQLSchema, SourceLocation, ValidationRule } from 'graphql';
import { Range } from 'graphql-language-service-utils';
import { DiagnosticSeverity, Diagnostic } from 'vscode-languageserver-types';
export declare const SEVERITY: {
    Error: "Error";
    Warning: "Warning";
    Information: "Information";
    Hint: "Hint";
};
export declare type Severity = typeof SEVERITY;
export declare type SeverityEnum = keyof Severity;
export declare const DIAGNOSTIC_SEVERITY: {
    Error: DiagnosticSeverity;
    Warning: DiagnosticSeverity;
    Information: DiagnosticSeverity;
    Hint: DiagnosticSeverity;
};
export declare function getDiagnostics(query: string, schema?: GraphQLSchema | null | undefined, customRules?: Array<ValidationRule>, isRelayCompatMode?: boolean): Array<Diagnostic>;
export declare function validateQuery(ast: DocumentNode, schema?: GraphQLSchema | null | undefined, customRules?: Array<ValidationRule> | null, isRelayCompatMode?: boolean): Array<Diagnostic>;
export declare function getRange(location: SourceLocation, queryText: string): Range;
//# sourceMappingURL=getDiagnostics.d.ts.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var markdown_it_1 = __importDefault(require("markdown-it"));
var md = new markdown_it_1.default();
function onHasCompletion(_cm, data, onHintInformationRender) {
    var CodeMirror = require('codemirror');
    var information;
    var deprecation;
    CodeMirror.on(data, 'select', function (ctx, el) {
        if (!information) {
            var hintsUl_1 = el.parentNode;
            information = document.createElement('div');
            information.className = 'CodeMirror-hint-information';
            hintsUl_1.appendChild(information);
            deprecation = document.createElement('div');
            deprecation.className = 'CodeMirror-hint-deprecation';
            hintsUl_1.appendChild(deprecation);
            var onRemoveFn_1;
            hintsUl_1.addEventListener('DOMNodeRemoved', (onRemoveFn_1 = function (event) {
                if (event.target === hintsUl_1) {
                    hintsUl_1.removeEventListener('DOMNodeRemoved', onRemoveFn_1);
                    information = null;
                    deprecation = null;
                    onRemoveFn_1 = null;
                }
            }));
        }
        var description = ctx.description
            ? md.render(ctx.description)
            : 'Self descriptive.';
        var type = ctx.type
            ? '<span class="infoType">' + renderType(ctx.type) + '</span>'
            : '';
        information.innerHTML =
            '<div class="content">' +
                (description.slice(0, 3) === '<p>'
                    ? '<p>' + type + description.slice(3)
                    : type + description) +
                '</div>';
        if (ctx && deprecation && ctx.isDeprecated) {
            var reason = ctx.deprecationReason
                ? md.render(ctx.deprecationReason)
                : '';
            deprecation.innerHTML =
                '<span class="deprecation-label">Deprecated</span>' + reason;
            deprecation.style.display = 'block';
        }
        else if (deprecation) {
            deprecation.style.display = 'none';
        }
        if (onHintInformationRender) {
            onHintInformationRender(information);
        }
    });
}
exports.default = onHasCompletion;
function renderType(type) {
    if (type instanceof graphql_1.GraphQLNonNull) {
        return renderType(type.ofType) + "!";
    }
    if (type instanceof graphql_1.GraphQLList) {
        return "[" + renderType(type.ofType) + "]";
    }
    return "<a class=\"typeName\">" + type.name + "</a>";
}
//# sourceMappingURL=onHasCompletion.js.map
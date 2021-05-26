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
exports.VariableEditor = void 0;
var react_1 = __importDefault(require("react"));
var onHasCompletion_1 = __importDefault(require("../utility/onHasCompletion"));
var commonKeys_1 = __importDefault(require("../utility/commonKeys"));
var VariableEditor = (function (_super) {
    __extends(VariableEditor, _super);
    function VariableEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.editor = null;
        _this._node = null;
        _this.ignoreChangeEvent = false;
        _this._onKeyUp = function (_cm, event) {
            var code = event.keyCode;
            if (!_this.editor) {
                return;
            }
            if ((code >= 65 && code <= 90) ||
                (!event.shiftKey && code >= 48 && code <= 57) ||
                (event.shiftKey && code === 189) ||
                (event.shiftKey && code === 222)) {
                _this.editor.execCommand('autocomplete');
            }
        };
        _this._onEdit = function () {
            if (!_this.editor) {
                return;
            }
            if (!_this.ignoreChangeEvent) {
                _this.cachedValue = _this.editor.getValue();
                if (_this.props.onEdit) {
                    _this.props.onEdit(_this.cachedValue);
                }
            }
        };
        _this._onHasCompletion = function (instance, changeObj) {
            onHasCompletion_1.default(instance, changeObj, _this.props.onHintInformationRender);
        };
        _this.cachedValue = props.value || '';
        return _this;
    }
    VariableEditor.prototype.componentDidMount = function () {
        var _this = this;
        this.CodeMirror = require('codemirror');
        require('codemirror/addon/hint/show-hint');
        require('codemirror/addon/edit/matchbrackets');
        require('codemirror/addon/edit/closebrackets');
        require('codemirror/addon/fold/brace-fold');
        require('codemirror/addon/fold/foldgutter');
        require('codemirror/addon/lint/lint');
        require('codemirror/addon/search/searchcursor');
        require('codemirror/addon/search/jump-to-line');
        require('codemirror/addon/dialog/dialog');
        require('codemirror/keymap/sublime');
        require('codemirror-graphql/variables/hint');
        require('codemirror-graphql/variables/lint');
        require('codemirror-graphql/variables/mode');
        var editor = (this.editor = this.CodeMirror(this._node, {
            value: this.props.value || '',
            lineNumbers: true,
            tabSize: 2,
            mode: 'graphql-variables',
            theme: this.props.editorTheme || 'graphiql',
            keyMap: 'sublime',
            autoCloseBrackets: true,
            matchBrackets: true,
            showCursorWhenSelecting: true,
            readOnly: this.props.readOnly ? 'nocursor' : false,
            foldGutter: {
                minFoldSize: 4,
            },
            lint: {
                variableToType: this.props.variableToType,
            },
            hintOptions: {
                variableToType: this.props.variableToType,
                closeOnUnfocus: false,
                completeSingle: false,
                container: this._node,
            },
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            extraKeys: __assign({ 'Cmd-Space': function () {
                    return _this.editor.showHint({
                        completeSingle: false,
                        container: _this._node,
                    });
                }, 'Ctrl-Space': function () {
                    return _this.editor.showHint({
                        completeSingle: false,
                        container: _this._node,
                    });
                }, 'Alt-Space': function () {
                    return _this.editor.showHint({
                        completeSingle: false,
                        container: _this._node,
                    });
                }, 'Shift-Space': function () {
                    return _this.editor.showHint({
                        completeSingle: false,
                        container: _this._node,
                    });
                }, 'Cmd-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                }, 'Ctrl-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                }, 'Shift-Ctrl-P': function () {
                    if (_this.props.onPrettifyQuery) {
                        _this.props.onPrettifyQuery();
                    }
                }, 'Shift-Ctrl-M': function () {
                    if (_this.props.onMergeQuery) {
                        _this.props.onMergeQuery();
                    }
                } }, commonKeys_1.default),
        }));
        editor.on('change', this._onEdit);
        editor.on('keyup', this._onKeyUp);
        editor.on('hasCompletion', this._onHasCompletion);
    };
    VariableEditor.prototype.componentDidUpdate = function (prevProps) {
        this.CodeMirror = require('codemirror');
        if (!this.editor) {
            return;
        }
        this.ignoreChangeEvent = true;
        if (this.props.variableToType !== prevProps.variableToType) {
            this.editor.options.lint.variableToType = this.props.variableToType;
            this.editor.options.hintOptions.variableToType = this.props.variableToType;
            this.CodeMirror.signal(this.editor, 'change', this.editor);
        }
        if (this.props.value !== prevProps.value &&
            this.props.value !== this.cachedValue) {
            var thisValue = this.props.value || '';
            this.cachedValue = thisValue;
            this.editor.setValue(thisValue);
        }
        this.ignoreChangeEvent = false;
    };
    VariableEditor.prototype.componentWillUnmount = function () {
        if (!this.editor) {
            return;
        }
        this.editor.off('change', this._onEdit);
        this.editor.off('keyup', this._onKeyUp);
        this.editor.off('hasCompletion', this._onHasCompletion);
        this.editor = null;
    };
    VariableEditor.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "codemirrorWrap", style: {
                position: this.props.active ? 'relative' : 'absolute',
                visibility: this.props.active ? 'visible' : 'hidden',
            }, ref: function (node) {
                _this._node = node;
            } }));
    };
    VariableEditor.prototype.getCodeMirror = function () {
        return this.editor;
    };
    VariableEditor.prototype.getClientHeight = function () {
        return this._node && this._node.clientHeight;
    };
    return VariableEditor;
}(react_1.default.Component));
exports.VariableEditor = VariableEditor;
//# sourceMappingURL=VariableEditor.js.map
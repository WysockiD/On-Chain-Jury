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
exports.QueryEditor = void 0;
var react_1 = __importDefault(require("react"));
var markdown_it_1 = __importDefault(require("markdown-it"));
var normalizeWhitespace_1 = require("../utility/normalizeWhitespace");
var onHasCompletion_1 = __importDefault(require("../utility/onHasCompletion"));
var commonKeys_1 = __importDefault(require("../utility/commonKeys"));
var md = new markdown_it_1.default();
var AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/;
var QueryEditor = (function (_super) {
    __extends(QueryEditor, _super);
    function QueryEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.editor = null;
        _this.ignoreChangeEvent = false;
        _this._node = null;
        _this._onKeyUp = function (_cm, event) {
            if (AUTO_COMPLETE_AFTER_KEY.test(event.key) && _this.editor) {
                _this.editor.execCommand('autocomplete');
            }
        };
        _this._onEdit = function () {
            if (!_this.ignoreChangeEvent && _this.editor) {
                _this.cachedValue = _this.editor.getValue();
                if (_this.props.onEdit) {
                    _this.props.onEdit(_this.cachedValue);
                }
            }
        };
        _this._onHasCompletion = function (cm, data) {
            onHasCompletion_1.default(cm, data, _this.props.onHintInformationRender);
        };
        _this.cachedValue = props.value || '';
        return _this;
    }
    QueryEditor.prototype.componentDidMount = function () {
        var _this = this;
        var CodeMirror = require('codemirror');
        require('codemirror/addon/hint/show-hint');
        require('codemirror/addon/comment/comment');
        require('codemirror/addon/edit/matchbrackets');
        require('codemirror/addon/edit/closebrackets');
        require('codemirror/addon/fold/foldgutter');
        require('codemirror/addon/fold/brace-fold');
        require('codemirror/addon/search/search');
        require('codemirror/addon/search/searchcursor');
        require('codemirror/addon/search/jump-to-line');
        require('codemirror/addon/dialog/dialog');
        require('codemirror/addon/lint/lint');
        require('codemirror/keymap/sublime');
        require('codemirror-graphql/hint');
        require('codemirror-graphql/lint');
        require('codemirror-graphql/info');
        require('codemirror-graphql/jump');
        require('codemirror-graphql/mode');
        var editor = (this.editor = CodeMirror(this._node, {
            value: this.props.value || '',
            lineNumbers: true,
            tabSize: 2,
            mode: 'graphql',
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
                schema: this.props.schema,
            },
            hintOptions: {
                schema: this.props.schema,
                closeOnUnfocus: false,
                completeSingle: false,
                container: this._node,
            },
            info: {
                schema: this.props.schema,
                renderDescription: function (text) { return md.render(text); },
                onClick: function (reference) {
                    return _this.props.onClickReference && _this.props.onClickReference(reference);
                },
            },
            jump: {
                schema: this.props.schema,
                onClick: function (reference) {
                    return _this.props.onClickReference && _this.props.onClickReference(reference);
                },
            },
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            extraKeys: __assign(__assign({ 'Cmd-Space': function () {
                    return editor.showHint({ completeSingle: true, container: _this._node });
                }, 'Ctrl-Space': function () {
                    return editor.showHint({ completeSingle: true, container: _this._node });
                }, 'Alt-Space': function () {
                    return editor.showHint({ completeSingle: true, container: _this._node });
                }, 'Shift-Space': function () {
                    return editor.showHint({ completeSingle: true, container: _this._node });
                }, 'Shift-Alt-Space': function () {
                    return editor.showHint({ completeSingle: true, container: _this._node });
                }, 'Cmd-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                }, 'Ctrl-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                }, 'Shift-Ctrl-C': function () {
                    if (_this.props.onCopyQuery) {
                        _this.props.onCopyQuery();
                    }
                }, 'Shift-Ctrl-P': function () {
                    if (_this.props.onPrettifyQuery) {
                        _this.props.onPrettifyQuery();
                    }
                }, 'Shift-Ctrl-F': function () {
                    if (_this.props.onPrettifyQuery) {
                        _this.props.onPrettifyQuery();
                    }
                }, 'Shift-Ctrl-M': function () {
                    if (_this.props.onMergeQuery) {
                        _this.props.onMergeQuery();
                    }
                } }, commonKeys_1.default), { 'Cmd-S': function () {
                    if (_this.props.onRunQuery) {
                    }
                }, 'Ctrl-S': function () {
                    if (_this.props.onRunQuery) {
                    }
                } }),
        }));
        if (editor) {
            editor.on('change', this._onEdit);
            editor.on('keyup', this._onKeyUp);
            editor.on('hasCompletion', this._onHasCompletion);
            editor.on('beforeChange', this._onBeforeChange);
        }
    };
    QueryEditor.prototype.componentDidUpdate = function (prevProps) {
        var CodeMirror = require('codemirror');
        this.ignoreChangeEvent = true;
        if (this.props.schema !== prevProps.schema && this.editor) {
            this.editor.options.lint.schema = this.props.schema;
            this.editor.options.hintOptions.schema = this.props.schema;
            this.editor.options.info.schema = this.props.schema;
            this.editor.options.jump.schema = this.props.schema;
            CodeMirror.signal(this.editor, 'change', this.editor);
        }
        if (this.props.value !== prevProps.value &&
            this.props.value !== this.cachedValue &&
            this.editor) {
            this.cachedValue = this.props.value;
            this.editor.setValue(this.props.value);
        }
        this.ignoreChangeEvent = false;
    };
    QueryEditor.prototype.componentWillUnmount = function () {
        if (this.editor) {
            this.editor.off('change', this._onEdit);
            this.editor.off('keyup', this._onKeyUp);
            this.editor.off('hasCompletion', this._onHasCompletion);
            this.editor = null;
        }
    };
    QueryEditor.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("section", { className: "query-editor", "aria-label": "Query Editor", ref: function (node) {
                _this._node = node;
            } }));
    };
    QueryEditor.prototype.getCodeMirror = function () {
        return this.editor;
    };
    QueryEditor.prototype.getClientHeight = function () {
        return this._node && this._node.clientHeight;
    };
    QueryEditor.prototype._onBeforeChange = function (_instance, change) {
        if (change.origin === 'paste') {
            var text = change.text.map(normalizeWhitespace_1.normalizeWhitespace);
            change.update(change.from, change.to, text);
        }
    };
    return QueryEditor;
}(react_1.default.Component));
exports.QueryEditor = QueryEditor;
//# sourceMappingURL=QueryEditor.js.map
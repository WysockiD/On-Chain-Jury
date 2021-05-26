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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultViewer = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var commonKeys_1 = __importDefault(require("../utility/commonKeys"));
var ResultViewer = (function (_super) {
    __extends(ResultViewer, _super);
    function ResultViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewer = null;
        _this._node = null;
        return _this;
    }
    ResultViewer.prototype.componentDidMount = function () {
        var CodeMirror = require('codemirror');
        require('codemirror/addon/fold/foldgutter');
        require('codemirror/addon/fold/brace-fold');
        require('codemirror/addon/dialog/dialog');
        require('codemirror/addon/search/search');
        require('codemirror/addon/search/searchcursor');
        require('codemirror/addon/search/jump-to-line');
        require('codemirror/keymap/sublime');
        require('codemirror-graphql/results/mode');
        var Tooltip = this.props.ResultsTooltip;
        var ImagePreview = this.props.ImagePreview;
        if (Tooltip || ImagePreview) {
            require('codemirror-graphql/utils/info-addon');
            var tooltipDiv_1 = document.createElement('div');
            CodeMirror.registerHelper('info', 'graphql-results', function (token, _options, _cm, pos) {
                var infoElements = [];
                if (Tooltip) {
                    infoElements.push(react_1.default.createElement(Tooltip, { pos: pos }));
                }
                if (ImagePreview &&
                    typeof ImagePreview.shouldRender === 'function' &&
                    ImagePreview.shouldRender(token)) {
                    infoElements.push(react_1.default.createElement(ImagePreview, { token: token }));
                }
                if (!infoElements.length) {
                    react_dom_1.default.unmountComponentAtNode(tooltipDiv_1);
                    return null;
                }
                react_dom_1.default.render(react_1.default.createElement("div", null, infoElements), tooltipDiv_1);
                return tooltipDiv_1;
            });
        }
        this.viewer = CodeMirror(this._node, {
            lineWrapping: true,
            value: this.props.value || '',
            readOnly: true,
            theme: this.props.editorTheme || 'graphiql',
            mode: 'graphql-results',
            keyMap: 'sublime',
            foldGutter: {
                minFoldSize: 4,
            },
            gutters: ['CodeMirror-foldgutter'],
            info: Boolean(this.props.ResultsTooltip || this.props.ImagePreview),
            extraKeys: commonKeys_1.default,
        });
    };
    ResultViewer.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.value !== nextProps.value;
    };
    ResultViewer.prototype.componentDidUpdate = function () {
        if (this.viewer) {
            this.viewer.setValue(this.props.value || '');
        }
    };
    ResultViewer.prototype.componentWillUnmount = function () {
        this.viewer = null;
    };
    ResultViewer.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("section", { className: "result-window", "aria-label": "Result Window", "aria-live": "polite", "aria-atomic": "true", ref: function (node) {
                if (node) {
                    _this.props.registerRef(node);
                    _this._node = node;
                }
            } }));
    };
    ResultViewer.prototype.getCodeMirror = function () {
        return this.viewer;
    };
    ResultViewer.prototype.getClientHeight = function () {
        return this._node && this._node.clientHeight;
    };
    return ResultViewer;
}(react_1.default.Component));
exports.ResultViewer = ResultViewer;
//# sourceMappingURL=ResultViewer.js.map
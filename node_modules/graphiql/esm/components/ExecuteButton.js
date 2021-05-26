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
import React from 'react';
var ExecuteButton = (function (_super) {
    __extends(ExecuteButton, _super);
    function ExecuteButton(props) {
        var _this = _super.call(this, props) || this;
        _this._onClick = function () {
            if (_this.props.isRunning) {
                _this.props.onStop();
            }
            else {
                _this.props.onRun();
            }
        };
        _this._onOptionSelected = function (operation) {
            _this.setState({ optionsOpen: false });
            _this.props.onRun(operation.name && operation.name.value);
        };
        _this._onOptionsOpen = function (downEvent) {
            var initialPress = true;
            var downTarget = downEvent.currentTarget;
            _this.setState({ highlight: null, optionsOpen: true });
            var onMouseUp = function (upEvent) {
                var _a;
                if (initialPress && upEvent.target === downTarget) {
                    initialPress = false;
                }
                else {
                    document.removeEventListener('mouseup', onMouseUp);
                    onMouseUp = null;
                    var isOptionsMenuClicked = upEvent.currentTarget && ((_a = downTarget.parentNode) === null || _a === void 0 ? void 0 : _a.compareDocumentPosition(upEvent.currentTarget)) &&
                        Node.DOCUMENT_POSITION_CONTAINED_BY;
                    if (!isOptionsMenuClicked) {
                        _this.setState({ optionsOpen: false });
                    }
                }
            };
            document.addEventListener('mouseup', onMouseUp);
        };
        _this.state = {
            optionsOpen: false,
            highlight: null,
        };
        return _this;
    }
    ExecuteButton.prototype.render = function () {
        var _this = this;
        var operations = this.props.operations || [];
        var optionsOpen = this.state.optionsOpen;
        var hasOptions = operations && operations.length > 1;
        var options = null;
        if (hasOptions && optionsOpen) {
            var highlight_1 = this.state.highlight;
            options = (React.createElement("ul", { className: "execute-options" }, operations.map(function (operation, i) {
                var opName = operation.name
                    ? operation.name.value
                    : "<Unnamed " + operation.operation + ">";
                return (React.createElement("li", { key: opName + "-" + i, className: operation === highlight_1 ? 'selected' : undefined, onMouseOver: function () { return _this.setState({ highlight: operation }); }, onMouseOut: function () { return _this.setState({ highlight: null }); }, onMouseUp: function () { return _this._onOptionSelected(operation); } }, opName));
            })));
        }
        var onClick;
        if (this.props.isRunning || !hasOptions) {
            onClick = this._onClick;
        }
        var onMouseDown = function () { };
        if (!this.props.isRunning && hasOptions && !optionsOpen) {
            onMouseDown = this._onOptionsOpen;
        }
        var pathJSX = this.props.isRunning ? (React.createElement("path", { d: "M 10 10 L 23 10 L 23 23 L 10 23 z" })) : (React.createElement("path", { d: "M 11 9 L 24 16 L 11 23 z" }));
        return (React.createElement("div", { className: "execute-button-wrap" },
            React.createElement("button", { type: "button", className: "execute-button", onMouseDown: onMouseDown, onClick: onClick, title: "Execute Query (Ctrl-Enter)" },
                React.createElement("svg", { width: "34", height: "34" }, pathJSX)),
            options));
    };
    return ExecuteButton;
}(React.Component));
export { ExecuteButton };
//# sourceMappingURL=ExecuteButton.js.map
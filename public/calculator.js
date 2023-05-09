"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;

var Calculator = /** @class */ (function () {
    function Calculator() {
        this.panelContents = "";
        this.memoryContents = 0;
        this.markContents = "";
        this.markPressed = false;
        this.marks = ["+", "-", "X", "/"];
    }
    Calculator.prototype.pressButton = function (b) {
        if (b == "C") {
            this.panelContents = "";
        }
        else if (this.marks.includes(b)) {
            this.memoryContents = parseFloat(this.panelContents);
            this.markContents = b;
            this.markPressed = true;
        }
        else if (b == "=") {
            this.markPressed = true;
            if (this.markContents.length == 1) {
                if (this.markContents == "+") {
                    this.panelContents = (this.memoryContents + parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "-") {
                    this.panelContents = (this.memoryContents - parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "X") {
                    this.panelContents = (this.memoryContents * parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "/") {
                    this.panelContents = (this.memoryContents / parseFloat(this.panelContents)).toString();
                }
            }
        }
        else if (b == "M+") {
            this.memoryContents += parseFloat(this.panelContents);
        }
        else if (b == "MR") {
            this.panelContents = this.memoryContents.toString();
        }
        else if (b == "MC") {
            this.memoryContents = 0;
        }
        else if (b == "MS") {
            this.memoryContents = parseFloat(this.panelContents);
        }
        else {
            if (this.markPressed) {
                this.panelContents = "";
                this.markPressed = false;
            }
            this.panelContents += b;
        }

    };
    Calculator.prototype.getPanelContents = function () {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    };
    return Calculator;
}());

exports.Calculator = Calculator;
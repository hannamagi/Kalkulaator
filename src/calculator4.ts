class Calculator {
    protected panelContents: string = "";

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "";
        } else if (b === "=") {
            const expression = this.panelContents.split("X"); // Split the panel contents by 'X' to separate the numbers
            const num1 = parseFloat(expression[0]);
            const num2 = parseFloat(expression[1]);
            const result = num1 * num2;
            this.panelContents = result.toString(); // Update the panel contents with the result
        } else {
            this.panelContents += b;
        }
    }

    getPanelContents(): string {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    }
}

export { Calculator };
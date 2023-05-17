const calc = {
	operations: [],
	result: [],
};

function calcResult() {
	const keyPad = document.querySelector("#keyPad");
	const displayCal = document.querySelector(".displayCal");

	keyPad.addEventListener("click", (e) => {
		const target = e.target.closest(".keyPad__btn");
		if (!target) return;

		// operands 0-9. data-type='num'
    if (target.dataset.type === "num") {
      calc.result = [];
			const num = +target.dataset.keypad;

			calc.operations.push(num);
			// calc.result.push(num);
			const toCalc = calc.operations.join("");
			displayCal.textContent = toCalc;
    }
    
		if (target.dataset.type === "period") {
			const lastOperand = calc.operations[calc.operations.length - 1];

			if (lastOperand === ".") {
				return;
			}
			if (
				lastOperand === "+" ||
				lastOperand === "-" ||
				lastOperand === "*" ||
				lastOperand === "/"
			) {
				calc.operations.push(target.dataset.keypad);
				displayCal.textContent = calc.operations.join("");
				return;
			}
			calc.operations.push(target.dataset.keypad);
			displayCal.textContent = calc.operations.join("");
			return;
		}

		// operators + - * / = data-type='operator'
		if (target.dataset.type === "operator") {
			const lastOperand = calc.operations[calc.operations.length - 1];

			if (
				lastOperand === "+" ||
				lastOperand === "-" ||
				lastOperand === "*" ||
				lastOperand === "/"
			) {
				calc.operations.pop();
				calc.operations.push(target.dataset.keypad);
				displayCal.textContent = calc.operations.join("");
				return;
			}

      // console.log(calc.result.length);
      if (calc.result.length !== 0) {
        // console.log(calc.result.length);
        const result = calc.result.pop();
        calc.operations.push(result, target.dataset.keypad);
        displayCal.textContent = calc.operations.join("");
        return;
      }

			calc.operations.push(target.dataset.keypad);
			displayCal.textContent = calc.operations.join("");
			return;
		}

		if (target.dataset.keypad === "del") {
			calc.operations.pop();
			if (calc.operations.length === 0) {
				displayCal.textContent = 0;
				return;
			}

			displayCal.textContent = calc.operations.join("");
		}
		if (target.dataset.keypad === "RESET") {
			calc.operations = [];
			// update cal screen to 0
			displayCal.textContent = 0;
		}
		if (target.dataset.type === "calc") {
			if (calc.operations.length === 0) {
				displayCal.textContent = 0;
				return;
			}
			try {
				const result = eval(calc.operations.join(""));
        displayCal.textContent = result;
        calc.result = [];
        calc.result.push(result);
				calc.operations = [];
			} catch (e) {
				if (e instanceof SyntaxError) {
          alert(`Syntax Error - ${e.message}`);
          displayCal.textContent = 0;
				calc.operations = [];
				}
			}
		}
	});
}
export { calcResult };

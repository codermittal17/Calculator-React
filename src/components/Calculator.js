import InputOutputScreen from "./InputOutputScreen";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

import { evaluate } from 'mathjs';

const specialCharacters = ["+", "-", "x", "/", "."]

function Calculator() {
    const [inputVal, setInputVal] = useState("0");

    function handleButtonClick(e) {
        const { innerHTML } = e.target;

        if (e.target.classList.contains("calc-btn")) {
            if (inputVal === "0" && specialCharacters.includes(innerHTML)) {
                return;
            }

            if (specialCharacters.includes(inputVal.slice(-1)) && specialCharacters.includes(innerHTML)) {
                return;
            }

            if (innerHTML === "=") {
                try {
                    
                    if (specialCharacters.includes(inputVal.slice(-1))) {
                        return;
                    }


                    const updatedInput = inputVal.replace("x", "*");

                    const result = evaluate(updatedInput);

                    setInputVal(result.toString());

                } catch (error) {
                    setInputVal("Error");
                }
                return;
            }

            setInputVal((input) => input === "0" ? innerHTML : input + innerHTML);
        }
    }


    return <div className="calc-container">
        <InputOutputScreen inputVal={inputVal} />
        <CalculatorButtons inputVal={inputVal} onClickButton={handleButtonClick} />
    </div>
}

export default Calculator;
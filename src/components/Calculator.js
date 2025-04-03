import InputOutputScreen from "./InputOutputScreen";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

import { evaluate } from 'mathjs';

const specialCharacters = ["+", "-", "x", "/", "."]

function Calculator() {
    const [inputVal, setInputVal] = useState("0");

    // function handleButtonClick(e) {

    //     const { innerHTML } = e.target;

    //     if (e.target.classList.contains("calc-btn")) {
    //         if (inputVal === "0" && specialCharacters.includes(innerHTML)) {
    //             return;
    //         }

    //         if (specialCharacters.includes(inputVal.slice(-1)) && specialCharacters.includes(innerHTML)) {
    //             return;
    //         }

    //         // if (innerHTML === "=" && inputVal !== "0") {
    //         //     console.log("f")
    //         //     Array.from(inputVal + innerHTML).forEach((char, i) => {
    //         //         console.log(char);
    //         //         if (specialCharacters.includes(char)) {
    //         //             const [firstEle, secondEle] = innerHTML.split(innerHTML.charAt(i));
    //         //             console.log(`FirstEle: ${firstEle}, SecondEle: ${secondEle}`);
    //         //         }
    //         //     })
    //         // }

    //         setInputVal((input) => input === "0" ? innerHTML : input + innerHTML);
    //     }
    // }

    function handleButtonClick(e) {
        const { innerHTML } = e.target;

        if (e.target.classList.contains("calc-btn")) {
            if (inputVal === "0" && specialCharacters.includes(innerHTML)) {
                return;
            }

            if (specialCharacters.includes(inputVal.slice(-1)) && specialCharacters.includes(innerHTML)) {
                return;
            }

            // Handle calculation when "=" is pressed
            if (innerHTML === "=") {
                try {
                    // Ensure last character is not a special character
                    if (specialCharacters.includes(inputVal.slice(-1))) {
                        return;
                    }


                    const updatedInput = inputVal.replace("x", "*");

                    // const result = eval(updatedInput);  eval is harmful to

                    const result = evaluate(updatedInput);

                    setInputVal(result.toString());

                } catch (error) {
                    setInputVal("Error");
                }
                return;
            }

            // Update input value
            setInputVal((input) => input === "0" ? innerHTML : input + innerHTML);
        }
    }


    return <div className="calc-container">
        <InputOutputScreen inputVal={inputVal} />
        <CalculatorButtons inputVal={inputVal} onClickButton={handleButtonClick} />
    </div>
}

export default Calculator;
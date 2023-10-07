import "./App.css"
import React, { useState } from "react";

const INPUTS = [
    [7, 8, 9, "%"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "+", "="],
];

export function CalculatorFn() {
    const [result, setResult] = useState("");

    const clickHandler = (event) => {
        const input = event.target.innerHTML;
        let newResult = result;
        if (input === "=") {
            newResult = eval(newResult);
        } else {
            newResult += input;
        }
        setResult(newResult);
    };

    return (
        <div>
            <div className="calc">
                <div className="display">{result}</div>
                {INPUTS.map((inputArray) => (
                    <div className="row">
                        {inputArray.map((input) => (
                            <button onClick={clickHandler}>{input}</button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
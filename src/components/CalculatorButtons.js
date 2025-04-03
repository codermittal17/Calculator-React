// import CalcButton from "./CalcButton";

// function CalculatorButtons({ inputVal, onClickButton }) {
//     return <div className="buttons-box">
//         <div className="buttons-container" onClick={onClickButton}>
//             <div className="buttons-row">
//                 <div className="calc-btn">7</div>
//                 <div className="calc-btn">8</div>
//                 <div className="calc-btn">9</div>
//                 <div className="calc-btn special">x</div>
//             </div>
//             <div className="buttons-row">
//                 <div className="calc-btn">4</div>
//                 <div className="calc-btn">5</div>
//                 <div className="calc-btn">6</div>
//                 <div className="calc-btn special">/</div>
//             </div>
//             <div className="buttons-row">
//                 <div className="calc-btn">1</div>
//                 <div className="calc-btn">2</div>
//                 <div className="calc-btn">3</div>
//                 <div className="calc-btn special">-</div>
//             </div>
//             <div className="buttons-row">
//                 <div className="calc-btn">0</div>
//                 <div className="calc-btn special">.</div>
//                 <div style={{
//                     backgroundColor: '#eca116',
//                     height: '3rem',
//                     width: '6rem',
//                     borderRadius: "0.5rem",
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     fontSize: '1.7rem'
//                 }} className="calc-btn special">=</div>
//                 <div style={{
//                     backgroundColor: '#eca116',
//                     height: '3rem',
//                     width: '6rem',
//                     borderRadius: "0.5rem",
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     fontSize: '1.7rem',
//                 }} className="calc-btn special">+</div>
//             </div>
//         </div>
//     </div>
// }

// export default CalculatorButtons;

import CalcButton from "./CalcButton";

function CalculatorButtons({ onClickButton }) {
    const buttonRows = [
        ["7", "8", "9", "x"],
        ["4", "5", "6", "/"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
    ];

    const specialStyles = {
        backgroundColor: "#eca116",
        height: "3rem",
        width: "6rem",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.7rem",
    };

    return (
        <div className="buttons-box">
            <div className="buttons-container" onClick={onClickButton}>
                {buttonRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="buttons-row">
                        {row.map((btn, btnIndex) => (
                            <CalcButton
                                key={btnIndex}
                                label={btn}
                                className={["x", "/", "-", "+"].includes(btn) ? "special" : ""}
                                style={["=", "+"].includes(btn) ? specialStyles : {}}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalculatorButtons;

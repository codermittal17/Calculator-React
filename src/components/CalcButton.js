// function CalcButton({ startValue, specialCharacter }) {
//     return (
//         <div className="buttons-row">
//             <div className="calc-btn">{startValue}</div>
//             <div className="calc-btn">{startValue + 1}</div>
//             <div className="calc-btn">{startValue + 2}</div>
//             <div className="calc-btn special">{specialCharacter}</div>
//         </div>
//     )
// }

// export default CalcButton


function CalcButton({ label, className = "", style = {} }) {
    return (
        <div
            className={`calc-btn ${className}`}
            style={style}
        >
            {label}
        </div>
    );
}

export default CalcButton;

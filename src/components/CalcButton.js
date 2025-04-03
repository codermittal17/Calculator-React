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

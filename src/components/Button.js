import React, { useRef } from "react";

import "../styles/components/button.css";

/**
 *
 * @param {Object} props
 * @param {Object} props.children
 * @param {Function} props.onClick
 * @param {'success' | 'orange'} props.type
 * @param {'default' | 'hover' | 'focus' | 'disabled'} props.state
 */
const Button = ({ children, onClick, type, state }) => {
    const buttonRef = useRef();

    const handleBlur = () => {
        buttonRef.current.blur();
    };

    return (
        <button ref={buttonRef} className={`button ${type}-button${state === "focus" ? "-focus" : ""}${state === "hover" ? "-hover" : ""}`} onClick={onClick} onMouseUp={handleBlur} disabled={state === "disabled"}>
            {children}
        </button>
    );
};

export default Button;

import React, { useRef } from "react";
import { AsYouType } from "libphonenumber-js";

import "../styles/components/input.css";
import CountryCodePicker from "./CountryCodePicker";

const INPUT_TYPES = {
    mail: {
        placeholder: "E-posta adresiniz",
        title: "E-posta"
    },
    phone: {
        placeholder: "Telefon numaranız",
        title: "Telefon"
    },
    iban: {
        placeholder: "IBAN",
        title: "IBAN"
    }
};

const Input = ({ type }) => {
    const inputRef = useRef();

    const selectedType = INPUT_TYPES[type];

    if (!selectedType) {
        return <></>;
    }

    const phoneNumberFormatter = rawNumber => {
        return new AsYouType("US").input(`${rawNumber}`);
    };

    const ibanFormatter = () => {};

    const handleInputValidation = () => {};

    const handleInputChange = input => {
        const value = input.target.value;
        console.log("value", value);
        if (type === "iban") {
            //inputRef.current.value = phoneNumberFormatter();
        } else if (type === "phone") {
            console.log("phoneNumberFormatter(value)", phoneNumberFormatter(value));
            inputRef.current.value = phoneNumberFormatter(value);
        }
    };

    const handleCountryPick = countryData => {
        console.log(countryData);
    };

    return (
        <div className='inputWrapper'>
            <span className='inputTitle'>{selectedType.title}</span>
            <div className='input-group'>
                {type === "phone" && <CountryCodePicker onPick={handleCountryPick} />}
                <div className='anchor-div' />
                <input ref={inputRef} className={`input ${type === "phone" ? "left-border-removed" : ""}`} placeholder={selectedType.placeholder} onBlur={handleInputValidation} onChange={handleInputChange} />
            </div>
        </div>
    );
};

export default Input;

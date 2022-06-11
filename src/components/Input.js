import React, { useRef, useState } from "react";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import * as ibantools from "ibantools";

import { validateEmail } from "../utils/validation";

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

const Input = ({ type, disabled }) => {
    const selectedType = INPUT_TYPES[type];

    const inputRef = useRef();
    const [inputValidationResult, setInputValidationResult] = useState();
    const [pickedCountry, setPickedCountry] = useState(null);

    const phoneNumberFormatter = rawNumber => {
        return new AsYouType(pickedCountry?.abbreviation || "TR").input(`${rawNumber}`);
    };

    const ibanFormatter = rawText => {
        return ibantools.friendlyFormatIBAN(rawText);
    };

    const handleInputValidation = () => {
        if (type === "mail") {
            const isOk = validateEmail(inputRef.current.value);
            setInputValidationResult(Boolean(isOk) ? "input-confirmed" : "input-rejected");
        } else if (type === "iban") {
            const isOk = ibantools.isValidIBAN(ibantools.electronicFormatIBAN(inputRef.current.value));
            setInputValidationResult(isOk ? "input-confirmed" : "input-rejected");
        } else if (type === "phone") {
            const isOk = isValidPhoneNumber(inputRef.current.value, pickedCountry?.abbreviation || "TR");
            setInputValidationResult(Boolean(isOk) ? "input-confirmed" : "input-rejected");
        }
    };

    const handleInputChange = input => {
        const value = input.target.value;

        if (type === "iban") {
            inputRef.current.value = ibanFormatter(value);
        } else if (type === "phone") {
            inputRef.current.value = phoneNumberFormatter(value);
        }
    };

    const handleCountryPick = countryData => {
        setPickedCountry(countryData);
    };

    if (!selectedType) {
        return <></>;
    }

    return (
        <div className='inputWrapper'>
            <span className='inputTitle'>{selectedType.title}</span>
            <div className={`input-group ${inputValidationResult && !disabled ? inputValidationResult : ""} ${disabled ? "disabled" : ""}`}>
                {type === "phone" && <CountryCodePicker onPick={handleCountryPick} disabled={disabled} />}
                <input ref={inputRef} className='input' placeholder={selectedType.placeholder} onBlur={handleInputValidation} onChange={handleInputChange} disabled={disabled} />
            </div>
        </div>
    );
};

export default Input;

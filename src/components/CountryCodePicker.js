import React, { useState } from "react";

import flagTR from "../assets/flag-tr.png";
import flagUK from "../assets/flag-uk.png";
import flagDE from "../assets/flag-de.png";
import chevronDown from "../assets/down-chevron.svg";

import "../styles/components/countryCodePicker.css";

const COUNTRY_MAPPING = {
    TR: {
        flag: flagTR,
        code: "+90",
        name: "Türkiye",
        abbreviation: "TR"
    },
    UK: {
        flag: flagUK,
        code: "+44",
        name: "United Kingdom",
        abbreviation: "UK"
    },
    DE: {
        flag: flagDE,
        code: "+49",
        name: "Deutschland",
        abbreviation: "DE"
    }
};

const CountryCodePicker = ({ onPick }) => {
    const [pickedCountry, setPickedCountry] = useState("TR");
    const [isPickerModalOpen, setPickerModalOpen] = useState();

    const handleOpenPickerModal = () => {
        setPickerModalOpen(true);
    };

    const handleModalClose = () => {
        setPickerModalOpen(false);
    };

    const handleModalClick = e => {
        e.stopPropagation();
    };

    const handleCountryPick = countryName => () => {
        setPickedCountry(countryName);
        onPick && onPick(COUNTRY_MAPPING[countryName]);
        handleModalClose();
    };

    return (
        <>
            <button className='country-picker' onClick={handleOpenPickerModal} tabIndex='-1'>
                <img className='country-flag' src={COUNTRY_MAPPING[pickedCountry].flag} alt='country flag' />
                <span className='phone-extension'>{COUNTRY_MAPPING[pickedCountry].code}</span>
                <img src={chevronDown} alt='chevron down' />
            </button>
            {isPickerModalOpen && (
                <div className='country-picker-modal-overlay' onClick={handleModalClose}>
                    <div className='country-picker-modal' onClick={handleModalClick}>
                        <div className='country-picker-modal-header'>
                            <span>Pick country code</span>
                            <span className='modal-close-button' onClick={handleModalClose}>
                                X
                            </span>
                        </div>
                        {Object.keys(COUNTRY_MAPPING).map(countryName => (
                            <div key={countryName} className='country-pick-row' onClick={handleCountryPick(countryName)}>
                                <img className='country-flag' src={COUNTRY_MAPPING[countryName].flag} alt='country flag' />
                                <span className='phone-extension'>{COUNTRY_MAPPING[countryName].code}</span>
                                <span className='country-name'>{COUNTRY_MAPPING[countryName].name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default CountryCodePicker;

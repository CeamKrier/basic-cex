import { useState } from "react";
import Button from "../components/Button";

import CardList from "../components/CardList";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/pages/main.css";

const TOTAL_PAGES = 4;

function Main() {
    const [screenNumber, setScreenNumber] = useState(2);
    const [selectedButtonState, setSelectedButtonState] = useState("focus");
    const [isInputDisabled, setInputDisabled] = useState(false);

    const proceedToNextScreen = () => {
        if (screenNumber + 1 <= TOTAL_PAGES) {
            setScreenNumber(screenNumber + 1);
        }
    };

    const proceedToPreviousScreen = () => {
        if (screenNumber - 1 > 0) {
            setScreenNumber(screenNumber - 1);
        }
    };

    const updateButtonState = state => () => {
        setSelectedButtonState(state);
    };

    const toggleInputDisabledState = () => {
        setInputDisabled(!isInputDisabled);
    };

    return (
        <>
            <Navbar onNext={proceedToNextScreen} onPrevious={proceedToPreviousScreen} />
            <Layout>
                <div className={screenNumber !== 1 ? "hidden" : ""}>
                    <CardList />
                </div>
                <div className={screenNumber !== 2 ? "hidden" : ""}>
                    <div className='buttonControllerRow'>
                        <button onClick={updateButtonState("default")}>Default</button>
                        <button onClick={updateButtonState("hover")}>Hover</button>
                        <button onClick={updateButtonState("focus")}>Focus</button>
                        <button onClick={updateButtonState("disabled")}>Disable</button>
                    </div>
                    <Button type='success' state={selectedButtonState}>
                        Validate
                    </Button>
                    <Button type='orange' state={selectedButtonState}>
                        Login
                    </Button>
                </div>
                <div className={`${screenNumber !== 3 ? "hidden" : ""}`}>
                    <div className='buttonControllerRow'>
                        <button onClick={toggleInputDisabledState}>{`${isInputDisabled ? "Toggle to default" : "Disable"}`}</button>
                    </div>

                    <div className='inputColumn'>
                        <Input type='mail' disabled={isInputDisabled} />
                        <Input type='phone' disabled={isInputDisabled} />
                        <Input type='iban' disabled={isInputDisabled} />
                    </div>
                </div>
                <div className={screenNumber !== 4 ? "hidden" : ""}>Screen 4</div>
            </Layout>
        </>
    );
}

export default Main;

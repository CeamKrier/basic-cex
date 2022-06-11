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
                <div className={`inputColumn ${screenNumber !== 3 ? "hidden" : ""}`}>
                    <Input type='mail' />
                    <Input type='phone' />
                    <Input type='iban' />
                </div>
                <div className={screenNumber !== 4 ? "hidden" : ""}>Screen 4</div>
            </Layout>
        </>
    );
}

export default Main;

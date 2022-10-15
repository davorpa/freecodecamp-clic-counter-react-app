import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App({ initialNumClicks = 0 }) {
    const [numClicks, setNumClicks] = useState(initialNumClicks);

    const handleClick = () => {
        setNumClicks((value) => value + 1);
    };

    const handleReset = () => {
        setNumClicks(initialNumClicks);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <Counter className="App-counter" number={numClicks} />
                <Button className="App-button btn-click" onClick={handleClick}>
                    Click
                </Button>
                <Button className="App-button btn-reset" onClick={handleReset}>
                    Reset
                </Button>
            </main>
        </div>
    );
}

export default App;

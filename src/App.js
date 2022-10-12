import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
    const handleClick = () => {
        console.log("Clic");
    };

    const handleReset = () => {
        console.log("Reset");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <Counter />
                <Button className="btn-click" onClick={handleClick}>
                    Click
                </Button>
                <Button className="btn-reset" onClick={handleReset}>
                    Reset
                </Button>
            </main>
        </div>
    );
}

export default App;

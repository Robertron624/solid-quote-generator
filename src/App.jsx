import { createSignal, onMount } from "solid-js";
import { RandomButton, CopyButton } from "./Buttons.jsx";
import "./App.css";

const baseURL = "https://api.quotable.io";

function App() {
    const [quote, setQuote] = createSignal({});

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(quote().content);
        alert("Copied to clipboard");
    };

    const handleGetRandomQuote = () => {
        // calling the API
        let url = `${baseURL}/quotes/random`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data[0]);
            })
            .catch((error) => {
                console.log(error);
            });

        // reset the scroll position
        window.scrollTo(0, 0);
    };

    // Get random quote on load
    onMount(() => {
        // calling the API
        let url = `${baseURL}/quotes/random`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <>
            <main>
                <div className="main-container">
                    <div className="wrapper">
                        <div className="top">
                            <p className="author">{quote().author}</p>
                            <ul className="categories">
                                {quote().tags && quote().tags.length > 0 ? (
                                    quote().tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))
                                ) : (
                                    <li>No hay tags disponibles</li>
                                )}
                            </ul>
                        </div>
                        <p className="quote">{quote().content}</p>
                    </div>
                    <div className="controls">
                        <button
                            onClick={handleGetRandomQuote}
                            id="random"
                            className="random"
                        >
                            <RandomButton />
                        </button>
                        <button
                            onClick={handleCopyToClipboard}
                            id="copy"
                            className="copy"
                        >
                            <CopyButton />
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;

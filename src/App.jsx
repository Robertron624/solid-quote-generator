import { createSignal } from "solid-js";
import { RandomButton, CopyButton } from "./Buttons.jsx";
import "./App.css";

function App() {

    const [quote, setQuote] = createSignal("");

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(quote());
    };

    const handleGetRandomQuote = () => {};


    return (
        <>
            <main>
                <div className="main-container">
                  <div className="wrapper">
                      <div className="top">
                          <p className="author">George Bernard Shaw</p>
                          <div className="categories">
                              <p>Famous Quotes</p>
                              <p>Inspirational</p>
                          </div>
                      </div>
                      <p className="quote">
                          "Learn from yesterday, live for today, hope for
                          tomorrow."
                      </p>
                  </div>
                  <div className="controls">
                      <button onClick={handleGetRandomQuote} id="random" className="random">
                        <RandomButton />
                      </button>
                      <button onClick={handleCopyToClipboard} id="copy" className="copy">
                        <CopyButton />
                      </button>
                  </div>
                </div>
            </main>
        </>
    );
}

export default App;

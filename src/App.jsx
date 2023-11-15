import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = createSignal(0);

    // doubled is a derived signal that updates whenever count changes
    const doubledCount = () => count() * 2;

    return (
        <>
            <main>
                <div className="wrapper">
                  <div className="top">
                    <p className="author">
                      George Bernard Shaw
                    </p>
                    <div className="categories">
                      <p>
                        Famous Quotes
                      </p>
                      <p>
                        Inspirational
                      </p>
                    </div>
                  </div>
                  <p className="quote">
                    "Learn from yesterday, live for today, hope for tomorrow."
                  </p>
                </div>
            </main>
        </>
    );
}

export default App;

import "./app.css"
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/tobar/TopBar";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Works from "./pages/works/Works"
import Services from "./pages/services/Services"
import Contact from "./pages/contact/Contact"
import { themeContext } from "./Context";
import { useState } from "react";

const App = () => {
    const [blackTheme, setBlackTheme] = useState(false)
    return (
        <div className="app">
            <themeContext.Provider value={[blackTheme, setBlackTheme]}>

                <BrowserRouter>
                    <TopBar />
                    <Intro />
                    <About />
                    <Works />
                    <Services />
                    <Contact />
                </BrowserRouter>
            </themeContext.Provider>
        </div>
    );
}

export default App;
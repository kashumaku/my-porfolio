import "./contact.css"
import { useContext } from "react"
import { themeContext } from "../../Context"
import Social from "../../components/social/Social"


const Contact = () => {
    const [blackTheme] = useContext(themeContext)
    return (
        <div className={blackTheme ? "contact nightMode" : "contact dayMode"} id="contact">
            <div className="contactClip"></div>
            <div className="contactContainer">
                <div className="leftContact">
                    <h1>Contact me</h1>

                    <Social />
                </div>
                <div className="rightContact">
                    <form >
                        <input placeholder="Name " className="input" />
                        <input placeholder="Email " className="input" />
                        <textarea placeholder="Message " className="input textArea"></textarea>
                        <button className="btnsend">Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;
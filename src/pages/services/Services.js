import "./services.css"
import { useContext } from "react"
import { themeContext } from "../../Context"
const Services = () => {
    const [blackTheme] = useContext(themeContext)

    return (
        <div className={blackTheme ? "services nightMode" : "services dayMode"} id="services">

            <div className="servicesClip"></div>

        </div>
    );
}

export default Services;
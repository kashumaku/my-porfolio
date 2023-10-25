import { useContext } from "react"
import AnimatedCard from "../../components/animtedcard/AnimatedCard"
import profile from "../../images/profile.jfif"
import "./intro.css"
import { themeContext } from "../../Context"
import Social from '../../components/social/Social'

const Intro = () => {
    const [blackTheme] = useContext(themeContext)
    return (
        <div className={blackTheme ? "intro nightMode" : "intro dayMode"} id="home">
            <div className="introleft">
                <div className="leftwrapper">
                    <div className={blackTheme ? "name nightMode" : "name dayMode"}>Hello, I'am <span>Kassahun Melaku</span></div>
                    <p className={blackTheme ? "introdesc nightMode" : "introdesc dayMode"}>
                        <span className="welcome"> Welcome to my portfolio website!</span>
                        I'am passionate and experianced fullstack
                        web developer focus on beautiful and functional
                        digital solutions.

                    </p>
                    <a href="#contact" className="btnhire">Hire Me</a>
                    <Social />
                </div>


            </div>
            <div className="introright">
                <div className="clippath"> </div>
                <div className="profile">
                    <img src={profile} alt="" className="profileimg" />

                </div>
            </div>
            <AnimatedCard />
        </div>)
}

export default Intro
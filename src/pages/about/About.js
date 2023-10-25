import resume from "../../data/Resume.PDF"
import "./about.css"
import { useContext } from "react"
import { themeContext } from "../../Context"
const About = () => {
    const [blackTheme] = useContext(themeContext)
    return (
        <div className={blackTheme ? "about nightMode" : "about dayMode"} id="about">
            <div className="leftabout">
                <div className="aboutclippath"></div>
                <h1 className="expTitle">Work Experience</h1>
                <div className="experience">

                    <div className="exp" ><span className="expYear ">3+</span> <span>Year Of Experience</span></div>
                    <div className="exp" ><span className="complatedPro">10</span><span>Complated projects</span></div>
                    <div className="exp" > <span className="companies">3</span><span>Companies</span></div>
                </div>


            </div>
            <div className="rightabout">
                <div className={blackTheme ? "aboutdesc nightMode" : "aboutdesc dayMode"}>
                    <h1>About Me</h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta sunt, magni facilis possimus harum aut temporibus voluptatibus
                        similique dolorum deleniti nihil, rem velit? Reiciendis at eos repellendus
                        corporis aperiam impedit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta sunt, magni facilis possimus harum aut temporibus voluptatibus
                        similique dolorum deleniti nihil, rem velit? Reiciendis at eos repellendus
                        corporis aperiam impedit?
                    </p>
                    <h1>Education</h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta sunt, magni facilis possimus harum aut temporibus voluptatibus
                        similique dolorum deleniti nihil, rem velit? Reiciendis at eos repellendus
                        corporis aperiam impedit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta sunt, magni facilis possimus harum aut temporibus voluptatibus
                        similique dolorum deleniti nihil, rem velit? Reiciendis at eos repellendus
                        corporis aperiam impedit?
                    </p>

                    <a href={resume} download className="btndownload"> Download CV</a>
                </div>
            </div>
        </div>
    );
}

export default About;
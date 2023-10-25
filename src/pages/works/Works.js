import './works.css'
import { useContext } from "react"
import { themeContext } from "../../Context"
import Work from '../../components/work/Work'
const Works = () => {
    const [blackTheme] = useContext(themeContext)
    return (

        <div className={blackTheme ? "works nightMode" : "works dayMode"} id='works'>
            <div className="workclip"></div>
            <div className="workContainer">
                <div className="workdesc">
                    <p>
                        I have developed many more projects such as responsive UI CRUD applications and Cryptographic security projects
                        I have developed supper market , social media, school payment system and many others. I Have satisfied my clients as well

                    </p>
                </div>
                <div className="workcards">
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                </div>
            </div>
        </div>
    );
}

export default Works;
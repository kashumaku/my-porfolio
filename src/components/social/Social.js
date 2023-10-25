import "./social.css"
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs"
const Social = () => {
    return (
        <div className="social">
            <BsGithub className="github socialicon" />
            <BsLinkedin className="linkdin socialicon" />
            <BsTelegram className="telegram socialicon" />

        </div>
    );
}

export default Social;
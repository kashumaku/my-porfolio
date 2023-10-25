import './work.css'
import w1 from '../../images/w1.png'

const Work = () => {
    return (
        <div className="work">
            <div className="workheader"><span className='workicons'>-</span><span className='workicons'>o</span><span className='workicons'>x</span></div>
            <div className="workmain">
                <div className="worktitle">Supper market</div>
                <img src={w1} alt="" className="workthumbnail" />
                <hr />
                <div className="workdetail">
                    <p>Lorem ipsum dolor sitvitae aliquid ipsum dolor sitvitae aliquid ipsum dolor sitvitae aliquid illum unde!
                        <div> <button className="learnmore">Learn more</button></div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Work
import "./AboutMe.css"
import MyPhoto from '../images/my-photo.jpg'

const AboutMe = () => {

    return <section className="about-me">
        <div className="about-me-container">
            <div className="animated-word">
                <div className="letter">I</div>
                <div className="transparent-letter"> </div>
                <div className="letter">A</div>
                <div className="letter">M</div>
                <div className="transparent-letter"></div>
                <div className="letter">T</div>
                <div className="letter">A</div>
                <div className="letter">D</div>
                <div className="letter">E</div>
                <div className="letter">A</div>
                <div className="letter">S</div>
            </div>

            <div className="subtitle">
                <p> a beginner developer</p>
            </div>

            <div className="my-photo">
                <img src={MyPhoto} alt="" />
            </div>
        </div>
    </section>
}
 
export default AboutMe;
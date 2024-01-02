import './MySkills.css'
import { FaPython } from 'react-icons/fa'
import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { FaGitAlt } from "react-icons/fa";

const MySkills = () => {

  return <section className='my-skills'>
            <div className="my-skills-container">

                <div className='text'>My skills: </div>

                <div>
                    <div className="word-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                        <span>Python</span>
                        <span>Git</span>
                    </div>
                </div>
                
            </div>

            <div className="skills-icons">
                    <FaHtml5 className='html-icon icon'/>
                    <FaCss3Alt className='css-icon icon'/>
                    <RiJavascriptFill className='js-icon icon'/>
                    <FaReact className='react-icon icon'/>
                    <FaPython className='python-icon icon'/>
                    <FaGitAlt className='git-icon icon'/>
            </div>
        </section>
}

export default MySkills
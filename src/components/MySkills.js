import './MySkills.css'
import { FaPython } from 'react-icons/fa'
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const MySkills = () => {

  return <section className='my-skills'>
            <div className="my-skills-container">

                <div className='text'>My skills: </div>

                <div>
                    <div className="word-list">
                        <span>Python</span>
                        <span>Git</span>
                        <span>MySQL</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                        <span>Next.js</span>
                        <span>PHP</span>
                        <span>Laravel</span>
                    </div>
                </div>
                
            </div>

            <div className="skills-icons">
                    <FaPython className='python-icon icon'/>
                    <FaGitAlt className='git-icon icon'/>
                    <SiMysql className='mysql-icon icon'/>
                    <FaHtml5 className='html-icon icon'/>
                    <FaCss3Alt className='css-icon icon'/>
                    <RiJavascriptFill className='js-icon icon'/>
                    <FaReact className='react-icon icon'/>
                    <TbBrandNextjs className='nextjs-icon icon'/>
                    <FaPhp className='php-icon icon'/>
                    <FaLaravel className='laravel-icon icon'/>
            </div>
        </section>
}

export default MySkills
import './NavBar.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const toggleFunction = () => {
    setToggle(!toggle)
  }

  const burgerClass = `burger ${toggle ? 'open' : ''}`;
  const navClasss = `${toggle ? 'open-menu' : ''}`

  return <nav>

    <div className={`burger ${burgerClass}`} onClick={toggleFunction}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={navClasss}>
        <li onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>ABOUT</li>
        <li onClick={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}>MY SKILLS</li>
        <li onClick={() => window.scrollTo({top: window.innerHeight * 2, behavior: "smooth"})}>WORK</li>
        <li onClick={() => window.scrollTo({top: document.documentElement.scrollHeight - window.innerHeight, behavior: "smooth"})}>CONTACT</li>
    </ul>

    <div className="social-networks">
        <a href="https://github.com/Tados1" target="_blank" rel="noopener noreferrer">< AiFillGithub /></a>
        <a href="https://www.instagram.com/_tado.s_/" target="_blank" rel="noopener noreferrer">< AiOutlineLinkedin /></a>
        <a href="https://www.instagram.com/_tado.s_/" target="_blank" rel="noopener noreferrer">< AiOutlineInstagram /></a>
        <a href="https://www.facebook.com/tadeas.ttado/" target="_blank" rel="noopener noreferrer">< AiOutlineFacebook /></a>
        
        
    </div>
  </nav>
}

export default NavBar
import './Work.css'
import { useEffect, useState } from "react"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import data from '../data';

const Work = () => {
    const [index, setIndex] = useState(0)
    const [moreInfo, setMoreInfo] = useState(false)

    useEffect( () => {
        if (index < 0) {
            setIndex(data.length - 1)
        } 
        if (index > data.length - 1) {
            setIndex(0)
        } 
    }, [index])

    const mouseEnterFunction = () => {
        console.log('ahoj');
        setMoreInfo(true)
    }

    const mouseLeaveFunction = () => {
        setMoreInfo(false)
    }


  return <section className="all-projects">
            <h1>Overview of my projects</h1>

            <div className="all-projects-content">
                {data.map( (oneMovie, oneMovieIndex) => {
                    const {id, image, title, description} = oneMovie

                    let mainClass = "next-slide"

                    if (oneMovieIndex === index) {
                        mainClass = "active-slide"
                    }

                    if (oneMovieIndex === index - 1 || (index === 0 && oneMovieIndex === data.length - 1)) {
                        mainClass = "last-slide"
                    }

                    return <article key={id} className={mainClass}>
                        <img src={image} alt="" className={`${moreInfo ? "change-img" : ""}`} />
                        <div className={`opacity-text ${moreInfo ? "more-info" : ""}`}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </article>
                })}   


                <div className="buttons">
                    <button onClick={() => setIndex(index - 1)}>
                        <FiArrowLeftCircle className='arrow-buttons'/>
                    </button>
                    
                    <button onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}>
                        <BsFillInfoSquareFill className='arrow-buttons'/>
                    </button>

                    <button onClick={() => setIndex(index + 1)}>
                        <FiArrowRightCircle className='arrow-buttons'/>
                    </button>
                </div>  
            </div>

            
        </section>
}

export default Work
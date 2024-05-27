import FirstPagePhoto from './images/engphrases.png'
import SecondPagePhoto from './images/company.png'
import ThirdPagePhoto from './images/journey.png'
import FourthPagePhoto from './images/portfolio-page-img.jpg'

const allProjects = [
    {
        id: 1,
        image: FirstPagePhoto,
        title: "Guess English Phrases",
        description: "A PHP website where, after creating an account, you can add your own phrases to guess later. You can also add new friends, and if they accept your friend request, you can challenge each other to duels by guessing each other's phrases. Additionally, you can track both your own and your friends' statistics."
    },
    {
        id: 2,
        image: SecondPagePhoto,
        title: "Company",
        description: "A PHP project designed for companies, where registration is available for employees, managers, and directors, each with their own specific roles. The main feature is for managers to assign tasks and schedule machines for employees."
    },
    {
        id: 3,
        image: ThirdPagePhoto,
        title: "Journey Organizer",
        description: "A Laravel project where, after registering, users can plan their upcoming vacation. They can schedule what to pack, their departure and return dates, as well as plan each individual day."
    },
    {
        id: 4,
        image: FourthPagePhoto,
        title: "Portfolio",
        description: "A React project showcasing my skills and project history. This page focuses on aesthetics and a simple layout, with a minimal number of features. The entire portfolio is designed with consideration for responsive design."
    },
]

export default allProjects

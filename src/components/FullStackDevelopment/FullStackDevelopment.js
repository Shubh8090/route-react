import Card from "../Card/Card";
import './FullStackDevelopment.css';
import fd from "../../Assests/Fulldev/fulldev.jpeg";
import fd1 from "../../Assests/Fulldev/fsd1.jpeg";
import fd2 from "../../Assests/Fulldev/fsd2.jpeg";
import fd3 from "../../Assests/Fulldev/fsd3.jpeg";
import fd4 from "../../Assests/Fulldev/fsd4.jpeg";
import fd5 from "../../Assests/Fulldev/fsd5.jpeg";

const FullStackDevelopment = () => {
    const devList = [
        {
            id: "1",
            img: fd,
            title: "Roles & Responsibilities of Full Stack Developers in 2023",
            description: "Full stack developers play a pivotal role in modern software development, possessing a diverse skill set that allows them to handle both front-end and back-end tasks."

        },
        {
            id: "2",
            img: fd1,
            title: "7 Powerful Steps to Land a Software Developer Internship",
            description: "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious software development career requires you to get an early and strong start."

        },
        {
            id: "3",
            img: fd3,
            title: "10 Best Skills for Web Development",
            description: "Web Development is a great, high-paying, and in-demand skill every individual must have. The world is moving towards the profession of web development as it is evolving, futuristic, and a promising career."

        },
        {
            id: "4",
            img: fd5,
            title: "How does Apache work? A detailed introduction to Apache",
            description: "Apache is known for its robustness, security, and scalability, and it is the de facto standard for web servers. In this article, we will take a closer look at how does apache works including its architecture, components, and processes."

        },
        {
            id: "5",
            img: fd4,
            title: "Web Development Roadmap for Beginners 2023",
            description: "We rely on web applications for our day-to-day activities. There are about 200 million active websites being used. Thus, web development is a great career choice for you."

        },
        {
            id: "6",
            img: fd2,
            title: "Top 10 Front-End Developer Skills You Should Know",
            description: "Front-end developers are responsible for building such beautiful and purposeful websites. Front-end developers are the ones who look after how well the website looks and behaves."

        }
    ]

    return (
        <div className="full-container">
                {devList.map((item, index)=>{
                    return (
                        <div className="full-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default FullStackDevelopment;
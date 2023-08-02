import Card from "../Card/Card";
import './CyberSecurity.css';
import cy from "../../Assests/CyberSecurity/cybersecurity.jpeg";
import cy1 from "../../Assests/CyberSecurity/cyber1.jpeg";
import cy2 from "../../Assests/CyberSecurity/cyber2.jpeg";
import cy3 from "../../Assests/CyberSecurity/cyber3.jpeg";
import cy4 from "../../Assests/CyberSecurity/cyber4.jpeg";
import cy5 from "../../Assests/CyberSecurity/cyber5.jpeg";




const CyberSecurity = () => {
    const cyberData = [
        {
            id: "1",
            img: cy,
            title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
            description: "Cybersecurity involves the protection of computer-based equipment and information from unintended or unauthorized access. "

        },
        {
            id: "2",
            img: cy5,
            title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
            description: "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism."

        },
        {
            id: "3",
            img: cy3,
            title: "Top 7 Cyber Security Attacks in Real Life",
            description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems."
        },
        {
            id: "4",
            img: cy1,
            title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
            description: "Ethical hackers perform hacking with prior permission from the concerned authorities. In order to perform this and carry out penetration testing various hacking techniques and tools are used."
        },    
        {
            id: "5",
            img: cy2,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            description: "Hacking is illegal but ethical hacking is the authorized practice of bypassing system security to identify any potential data threat. Ethical hackers try to examine the systems to pinpoint the weak points."

        },
        {
            id: "6",
            img: cy4,
            title: "Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap",
            description: "According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging jobs. Cybersecurity jobs are also one of the most handsomely paying jobs in recent times."
        }
    ]

    return (
        <div className="cyber-container">
                {cyberData.map((item, index)=>{
                    return (
                        <div className="cyber-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default CyberSecurity;
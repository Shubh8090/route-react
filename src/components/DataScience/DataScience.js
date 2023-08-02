import Card from '../Card/Card';
import './DataScience.css'
import ds from "../../Assests/DataScience/datascience.jpeg";
import ds1 from "../../Assests/DataScience/data1.jpeg";
import ds2 from "../../Assests/DataScience/data2.jpeg";
import ds3 from "../../Assests/DataScience/data3.jpeg";
import ds4 from "../../Assests/DataScience/data4.jpeg";
import ds5 from "../../Assests/DataScience/data5.jpeg";


const DataScience = () => {
    const data = [
        {
            id: "1",
            img: ds,
            title: "Roles and Responsibilities of a Data Scientist",
            description: "Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age. As organizations wrestle with large volumes of data, the need for professionals has increased."

        },
        {
            id: "2",
            img: ds5,
            title: "Best Websites to Learn Data Science in 2023: Beginner to Expert",
            description: "Are you interested in learning data science but not sure where to start? In this blog, we’ll explore the best websites for data science that offer great resources."

        },
        {
            id: "3",
            img: ds3,
            title: "Data Science vs. Machine Learning: What every elite coder needs to know",
            description: "Data Science is the practice of extracting insights and information from data, while Machine Learning is a subset of Data Science that focuses on building algorithms."

        },
        {
            id: "4",
            img: ds1,
            title: "A Profound Data Scientist’s Career Path",
            description: "All kinds of organizations ranging from retail to government, to healthcare depend on data scientists"

        },
        {
            id: "5",
            img: ds2,
            title: "Neural Network Skills to Succeed in Data Science",
            description: "Data science is a powerful asset that allows certain stakeholders and businesses to make informed decisions and create solutions to real-world problems using data."

        },
        {
            id: "6",
            img: ds4,
            title: "Best Python Libraries for Data Science Career in 2023",
            description: "Beautiful Soup is one popular library of Python that helps collect data from HTML & XML files & arranges them in proper format. "

        }
    ]

    return (
        <div className="data-container">
                {data.map((item, index)=>{
                    return (
                        <div className="data-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default DataScience;
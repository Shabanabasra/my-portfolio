import { title } from "process";
import React from "react";
import Heading from "./Heading"; 
import Card from "./Card";


const data =[
    {
        id:0,
        title: "figma Assignment",
        desc: "A Next.js-based assignment for managing and organizing tasks in Figma",
        img:"/images/project_0.jpg",
        tags:["next.Js", "CSS"]

},
{
    id:1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript-powered website to track time with a customizable countdown timer.",
    img: "/images/project_1.jpg",
    tags: ["Nest.Js","Node", "CSS","Typescript"],

},
{
    id: 2,
    title: "static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, showcasing skills and experience in a dynamic format.",
    img:"/images/project_2.jpg",
    tags: ["Typescript", "HTML","CSS"]
},
{
    id:3,
    title: "Weather Widget",
    desc:"A real-time weather widget built with JavaScript to display current weather conditions and forecasts.",
    img:"/images/project_3.jpg",
    tags: ["Nest.Js","Node", "CSS","Typescript"],
},
{
    id:4,
    title:"/images/Pana cloud",
    desc:"A cloud-based platform by Pana for managing and deploying scalable web applications.",
    img:"/images/project_4.jpg",
    tags: ["HTML","CSS"],
},
{
    id:5,
    title: "responsive-website-html-css",
    desc:"A responsive website built with HTML and CSS, designed to adapt seamlessly to various screen sizes.",
    img:"/images/project_5.jpg",
    tags:["HTML","CSS"],
},

]



const Projects =() => {
    return(
        <div  id="projects"  className="container pt-32">
            <Heading title="My Projects"/>
            <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid -cols-3 place-items-center">
                {data.map((el) => (<Card 
                key={el.id}
                title={el.title}
                desc ={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>

        </div>
    )
}
export default Projects
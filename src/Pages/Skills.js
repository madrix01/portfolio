import React from 'react';
import './Skills.css';
import SkillCard from  '../Components/SkillCard';


function Skills(){
    return(
        <div className="skil">
            <div className="title">Skills</div>
            <div className="main">
            
            <SkillCard
              link = 'https://img.icons8.com/color/48/000000/python.png'
              name = "Python"
            />
            <SkillCard
              link = 'https://img.icons8.com/material-sharp/48/000000/django.png'
              name = "Django"
            />
            <SkillCard
              link = 'https://img.icons8.com/color/48/000000/javascript.png'
              name = "Javascript"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              name = "C++"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/c-programming.png"
              name = "C"
            />
            <SkillCard
              link = "https://cdn.iconscout.com/icon/free/png-128/logo-1889531-1597591.png"
              name = "React"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/html-5.png"
              name = "HTML"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/css3.png"
              name = "CSS"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/mongodb.png"
              name = "MongoDB"
            />
            <SkillCard
              link = "https://img.icons8.com/color/48/000000/git.png"
              name = "Git"
            />
            <SkillCard
              link = "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              name = "NodeJs"
            />
            <SkillCard
              link = "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
              name = "ExpressJs"
            />
            </div>
        </div>
    )
}

export default Skills;
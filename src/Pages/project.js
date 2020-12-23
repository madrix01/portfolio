import React from 'react';
import './project.css';
import ProjectCard from '../Components/ProjectCard';


function Project(){
    return(
        <div className="projects">
            <div className="title">Projects</div>
            <div className="main">
                <ProjectCard 
                    title="👀WhosDat"
                    description="Daily attendance using face recognition from CCTV camera"
                    link="https://github.com/madrix01/whosdat"
                />
                <ProjectCard
                    title = "🤖MS-Teams Auto Join"
                    description = "Attends meetings for you just ping on discord"
                    link="https://github.com/madrix01/MsTeam-Auto"
                />
                <ProjectCard
                    title = "💬Sockets with Python"
                    description = "Basic CLI chat app using sockets in python"
                    link="https://github.com/madrix01/Sockets-Python"
                />
                <ProjectCard
                    title = "📝BlogWork"
                    description = "Blogging app made using javascript and react"
                    link="https://github.com/madrix01/Blogwork-JS"
                />
                <ProjectCard
                    title = "💬CLI Chat app "
                    description = "Chat from command line made with Javascript and Socket.io"
                />
            </div>
        </div>
    )
}

export default Project;
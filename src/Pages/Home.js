import React from 'react';
import '../App.css';

function Home(){
    return(
      <div className="name">
        Hola, I'm <br/>
        Shlok✋
        <div className="dev">Developer | Student | Engineer</div>
        <div className="skills">
					<a href="https://github.com/madrix01" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
          <a href="mailto:shlokcpatel2001@gmail.com" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/gmail--v1.png"/></a>
          <a href="https://www.instagram.com/_xirdam_/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
          <a href="https://www.linkedin.com/in/madrix/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
					<a href="https://discordapp.com/users/417576373079506965/" target="_blank"><img src="https://img.icons8.com/fluent/50/000000/discord-logo.png"/></a>
				</div>
      </div>
    )
}

export default Home;
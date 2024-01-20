import React from 'react'
import '../components/BasicBioText.css';

const BasicBioText = () => {
  return (
    <div className="BasicBioText">
      <p>Hi! My name is Keith Butterfield and I am a software developer, who mostly works as a Fullstack Developer.  
        I recently obtained a new job at New Frontier Services as a Software Developer (Really it's Fullstack since I work in front, back, and DB).  
        My hobbies are faith, family, learning, and playing video games while living in a small town in the USA.  
        Currently, all I have time for is creating and maintaining three different personal projects since life has been hectic.  

      </p>
      <p>
      Here are my Three projects!
      Since my dream is to make video games, 
          I am learning the Godot game engine to make a small game of some sorts, 
          creating a paycheck budget app since finances are important to me, 
          and maintaining a farm management web app I have in production (and getting it off of AWS!)
      </p>
      <div className='languagesIKnow'>
        <p>Here are the languages I am currently using in all of my projects and work!</p> 
        <span>
          <div className='languageList'>
            <label for="HTML">
              <img id="HTML" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </label>
            <label for="CSS">
              <img className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />          
            </label>
            <label for="JavaScript">
              <img id="JavaScript" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />        
            </label>
            <label for="React">
              <img id="React" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </label>
            <label for="Mongo">
              <img id="Mongo" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            </label>
            <label for="Express">
              <img id="Express" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />        
            </label>
            <label for="Node.js">
              <img id="Node.js" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            </label>
            <label for="Java">
              <img id="Java" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            </label>
            <label for="MySQL">
              <img id="MySQL" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />        
            </label>
            <label for="C#">
              <img id="C#" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />        
            </label>
            <label for=".NET">
              <img id=".NET" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
            </label>
            <label for="SQL">
              <img id="SQL" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />        
            </label>
            <label for="Godot">
              <img id="Godot" className="langugeIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" />
            </label>
          </div>
        </span>
      </div>
      {/* All Icons can be found at https://devicon.dev/ */}
    </div>
  )
}

export default BasicBioText
import React from 'react'
import '../components/ProjectContainer.css'
import '../components/projects/Modal.css'
import { createPortal } from 'react-dom'
import { useState } from 'react';
import ModalContent from '../components/projects/ModalContent.js';
import FMSProject from '../components/projects/FMSProject.jsx';
import PaycheckApp from './projects/PaycheckApp.jsx';
import GodotGames from './projects/GodotGames.jsx';

const ProjectContainer = () => {

  const [showModal, setShowModal] = useState(false);
  const [showFarm, setShowFarm] = useState(false);
  const [showMoney, setShowMoney] = useState(false);
  const [showGodot, setShowGodot] = useState(false);
  
  return (
    <div className='ProjectContainer'>
      <div className='Project' onClick={() => setShowFarm(true)}>
        
      </div>
      <div className='Project' onClick={() => setShowMoney(true)}>

      </div>
      <div className='Project' onClick={() => setShowGodot(true)}>

      </div>
      


      {
      //This is going to be a little hacky, but time is of the essence....
      (showFarm && createPortal(
        <FMSProject onClose={() => setShowFarm(false)}  />,
        document.body)) || 
        (showMoney && createPortal(
        <PaycheckApp  onClose={() => setShowMoney(false)}  />,
        document.body)) ||
        (showGodot && createPortal(
        <GodotGames  onClose={() => setShowGodot(false)}  />,
        document.body))
      }
    </div>
  )
}

export default ProjectContainer
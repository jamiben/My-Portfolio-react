import React, { useState, MouseEventHandler, useRef, useEffect } from "react";
import "./Project.scss";

export default function Project() {

  
  const [currentProject, setCurrentProject] = useState(0);
  const numProjects = 8;
  const theta = 2 * Math.PI / numProjects;
  const carouselAndBtn = useRef<HTMLDivElement>(null);

  const HandlePrevClick = () => {
    const prevProject = currentProject === numProjects ? 0 : currentProject -1;
    setCurrentProject(prevProject)
  };

  const HandleNextClick = () => {
    const nextProject = currentProject === -1 ? 0 : currentProject +1; 
      setCurrentProject(nextProject)
  }
  
  

  return (
    <div className="contentProjects">
      <h1 className="titleProject">Mes réalisations</h1>
      <div className="carouselParent">
        <ul id="contentCarousel" className="contentCarousel" style={{transform: `rotateY(${currentProject * -theta}rad)` }}>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
          <li className="contentItemCarou">
            <a href='' className="contentImg"></a>
          </li>
        </ul>
        {/* <div className="contentDetail">{{}}</div> */}
        <nav id="contentBtnCarou" className="contentBtnCarou" >
          <button className="btnPrevuous" onClick={HandlePrevClick}>p</button>
          <button className="btnNext" onClick={HandleNextClick}>n</button>
        </nav>
      </div>
    </div>
  );
}

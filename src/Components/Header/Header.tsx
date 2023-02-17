import React, { useState } from "react";
import "./Header.css";
import {BrowserRouter as Router,Link} from "react-router-dom";

import BurgerComponent from "./burger-menu/BurgerComponent";


export default function Header (){

    const [burgerButtonOpen, setBurgerButtonOpen] = useState(false);


    const toggleButtonBurger = () => {
        setBurgerButtonOpen(!burgerButtonOpen)
    }

    return(
        <div className='contentHeader'> 
            <header className='header'>
                <nav className='nav'>
                    <Router >
                        <ul className="ulNav">
                            <li className="liNav" style={{color:'white'}}><Link to='/profil' className="linkNav" style={{color:'white'}}>Experience</Link></li>                    
                            <li className="liNav"><Link to='/profil' className="linkNav">Contact</Link></li>                    
                            <li className="liNav"><Link to='/projec' className="linkNav">Projects</Link></li>                    
                            <li className="liNav"><Link to='/contac' className="linkNav">Profile</Link></li> 
                        </ul>                   
                    </Router>
                </nav>
            </header>

            <div className="contentBurgerComponent" onClick={toggleButtonBurger}>
                <BurgerComponent isOpen={burgerButtonOpen}  />
            </div>

            <style >{`
                .nav{
                    display: ${burgerButtonOpen ? 'inline' : 'none'};
                }
            `}</style>
        </div>

    );
};

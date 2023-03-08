import React, { useState } from "react";
import "./Header.scss";
import {BrowserRouter as Router,Link} from "react-router-dom";

import BurgerComponent from "./burger-menu/BurgerComponent";
import HeaderContext from "../../../Context/Context";
export default function Header (){

    const [burgerButtonOpen, setBurgerButtonOpen] = useState(false);

    const toggleButtonBurger = () => {
        setBurgerButtonOpen(!burgerButtonOpen);
        console.log('burgerButtonOpen', burgerButtonOpen);
    }
    return(
        
        <HeaderContext.Provider value={{burgerButtonOpen, setBurgerButtonOpen}}>
            <header className='header'>
                <nav className={` ${burgerButtonOpen ? 'nav--open' : 'nav'}`} >
                    <Router >
                        <ul className="ulNav">
                            <li className="liNav" >
                                <Link to='/profil' className="linkNav" >Profile <div className="underligne"></div></Link>
                            </li>                    
                            <li className="liNav">
                                <Link to='/profil' className="linkNav" >Profile <div className="underligne"></div></Link>
                            </li>                    
                            <li className="liNav">
                                <Link to='/projec' className="linkNav" >Project <div className="underligne"></div></Link>
                            </li>                    
                            <li className="liNav" >
                                <Link to='/contact' className="linkNav" >Contact <div className="underligne"></div></Link>
                            </li> 
                        </ul>                   
                    </Router>
                </nav>

                <div className="contentBurgerComponent" onClick={toggleButtonBurger}>
                    <BurgerComponent />
                </div>
        </header>
        </HeaderContext.Provider>
    );
};

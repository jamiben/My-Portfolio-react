import React, {useContext} from 'react';

import './BurgerComponent.scss';
import HeaderContext from '../../../../Context/Context';

export default function BurgerComponent(){


    return(
        <HeaderContext.Consumer>
            {({burgerButtonOpen}) => (

                <div className='contentBurger'>
                    <div className={`spBurger1 spBurger ${burgerButtonOpen ? 'rotate-45' : ''}`}></div>
                    <div className={`spBurger2 spBurger ${burgerButtonOpen ? 'display-none' : ''}`} ></div>
                    <div className={`spBurger3 spBurger ${burgerButtonOpen ? 'rotate-minus45' : ''}`}></div>
                </div>
            )}
        </HeaderContext.Consumer>

    )

}
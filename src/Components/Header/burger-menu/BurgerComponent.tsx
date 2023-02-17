import React, {Component} from 'react';

import './BurgerComponent.css';

export default function BurgerComponent({isOpen}:any){

    return(
        <div className='contentBurger'>
            <div className='spBurger1 spBurger'></div>
            <div className='spBurger2 spBurger' ></div>
            <div className='spBurger3 spBurger'></div>


        <style>{`
            .contentBurger{
                height:2rem;
            }
            .spBurger1{
                transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
            }
            .spBurger2{
                transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${isOpen ? 0 : 1};
            }
            .spBurger3{
                transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
            }
            `}</style>
        </div>

    )

}
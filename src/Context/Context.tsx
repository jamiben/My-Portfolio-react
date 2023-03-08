import React , {useState, createContext} from 'react';


interface HeaderContextProps {
    burgerButtonOpen: boolean;
    setBurgerButtonOpen: (isOpen: boolean) => void;
}

const HeaderContext = createContext<HeaderContextProps>({
    burgerButtonOpen: false,
    setBurgerButtonOpen:() =>{},
});
export default HeaderContext;
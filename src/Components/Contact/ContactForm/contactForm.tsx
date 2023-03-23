import React from 'react';
import './contactForm.scss'

export default function ContatcForm() {

    return(
        <div className="contentForm">
            <input type="text" placeholder='Name' className="step1 " />
            <input type="text" placeholder='Socity' className="step2 inp" />
            <select name="" id="" className="step3 inp">
                <option value="" className="options">Concéption site administration</option>
                <option value="" className="options">Conception Site vitrine</option>
                <option value="" className="options">Mission Freelance</option>
                <option value="" className="options">Autres</option>
            </select>
            <input type="text" placeholder='Email' className="step4 inp" />
            <input type="text" placeholder='Phone number' className="step5 inp" />
        </div>
    )
}
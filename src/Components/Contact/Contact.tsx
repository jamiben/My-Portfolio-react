import React from 'react';
import ContactForm from './ContactForm/contactForm'
import './Contact.scss';


export default function Contact() {

    return (
        <div className="contentContact">
            <h1 className="titleContact">Contact</h1>
            <div className="contentTxtForm">
                <div className="contentPara">
                    <p className="paraContatc">Site web</p>
                    <p className="paraContatc">Site vitrine</p>
                    <p className="paraContatc">Refonte </p>
                    <p className="paraContatc">Référencement</p>
                    <p className="paraContatc">N'hesitez pas à me contacter pour un devis et une éventuel collaboration</p>
                    <p className="paraContatc">0635395040</p>
                </div>
                <ContactForm />
            </div>
        </div>
        );
}


import React from 'react';
import './Footer.scss';




export default function Footer() {

    return (
        <div className="contentFooter">
            <p className="contentCopyRight">Copyright 2023-Jenny Benzerara tout droits réservés</p>
            <div className="contentLinkFoot">
                {/* <li className="contentLink"> */}
                    <a href="" className="linkFoot">Sitemap</a>
                {/* </li> */}
                <span className='spanFoot'>|</span>
                {/* <li className="contentLink"> */}
                    <a href="" className="linkFoot">Legal Notice</a>
                {/* </li> */}
                <span className='spanFoot'>|</span>
                {/* <li className="contentLink"> */}
                    <a href="" className="linkFoot">Privacy Policy</a>
                {/* </li> */}
            </div>
        </div>
    )
}
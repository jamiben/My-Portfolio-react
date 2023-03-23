import React, { useState } from 'react';
import './download.scss';
import cv from '.././../../assets/cv.pdf'
import lettre from '.././../../assets/lettre.pdf'

export default function Download() {

    function downloadPDF(pdfUrl:any, fileName:any) {
        fetch(pdfUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error('erreur format de fichier');
                }
                return response.blob();
            }) 
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const element = document.createElement('a');
                element.href = url;
                element.download = fileName;
                document.body.appendChild(element);
                element.click();

                setTimeout(() => {
                    document.body.removeChild(element);
                    window.URL.revokeObjectURL(url);
                }, 0);
            })
            .catch((error) => {
                console.log('erreur de téléchargement', error);
            });
    }

    return(
        <div className="contentDownload">
            <button className="contentDownload" onClick={() => downloadPDF(cv, 'cv.pdf')}>Download</button>
        </div>
    )
}
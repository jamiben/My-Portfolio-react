import React from 'react';
import './competances.scss';
import Download from './Downlowad/Download';

export default function Competences() {


    return (
        <div className="contentCompetences">
            <h1 className="titleCompetences">Compétences</h1>
            <div className="contentCenterItems">
                <p className="paraCompetences">Elles sont en constantes amélioration car pour moi la joie de ce métier fait que l'on apprend tout les jous, d'autant plus en étant impliqué, curieuse et passionnée...</p>
                <div className="imgCv"></div>
            <Download />
            </div>
        </div>
    )
}
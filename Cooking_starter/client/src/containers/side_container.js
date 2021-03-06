import React from 'react'
import { useState, useEffect } from 'react';
import tipsAndTricksService from '../services/TipsAndTricksService';
import TipsAndTricks from '../components/TipsAndTricks';
import Quiz from '../components/quiz_component';


const SideContainer = () => {

    const [tipsAndTricks, setTipsAndTricks] = useState([]);
    const [clientFavs, setClientFavs] = useState([]);
    const [startQuiz, setStartQuiz] = useState(null);

        useEffect(() => {
          tipsAndTricksService.getTipsAndTricks()
          .then(tipsAndTricks => setTipsAndTricks(tipsAndTricks));
        }, []);

        useEffect(() => {
            tipsAndTricksService.getClientFavs()
            .then(clientFavs => setClientFavs(clientFavs));
          }, []);

     const handleButtonClick = () => {
         setStartQuiz(true)
     }

    const Container_Content = () => {
    if (startQuiz) {
        return <Quiz />
    }
    else{
        return (
        <>
        <TipsAndTricks tipsAndTricks={tipsAndTricks} handleButtonClick ={handleButtonClick} clientFavs={clientFavs} />
        </>
        )
    
    }
};
    
    return (
        <>
        {Container_Content()}
        </>
        )
    }


export default SideContainer;
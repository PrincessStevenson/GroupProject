import React from 'react';
import './tips_tricks.css';

const TipsAndTricks = ({tipsAndTricks, clientFavs, handleButtonClick}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipsAndTricks => {
        return <div key={tipsAndTricks._id}>
            <a href={tipsAndTricks.link} target='_blank' class="link">{tipsAndTricks.title}</a>

            <br></br>
            <br></br>
            </div>
    });

    const clientNodes = clientFavs.map(clientFav => {
        return <div key={clientFav._id}>
            <a href={clientFav.sourceUrl} target='_blank' class="link">{clientFav.title}</a>
        </div>
    })

    const handleClick = () => {
        handleButtonClick()
    }

    return (
        <section class="tips">
            <button onClick = {handleClick}> Start Quiz!</button>
            <h2 class= "tips-header">Tips and Tricks</h2>
            
            <div >
                <ul class ="tips-list">
                {tipsAndTricksNodes}  
                </ul>
            </div>

            <h2 class="tips-client">Melinda's Favourite Recipes</h2>

            <div>
                <ul class="client-list">
                    {clientNodes}
                </ul>
            </div>
            
        </section>
    )
};

export default TipsAndTricks;


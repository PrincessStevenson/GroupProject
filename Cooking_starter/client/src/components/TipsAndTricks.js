import React from 'react';
import './tips_tricks.css';

const TipsAndTricks = ({tipsAndTricks, handleButtonClick}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipsAndTricks => {
        return <div key={tipsAndTricks._id}>
            <a href={tipsAndTricks.link} target='_blank' class="link">{tipsAndTricks.title}</a>

            <br></br>
            <br></br>
            </div>
    });

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
        </section>
    )
};

export default TipsAndTricks;


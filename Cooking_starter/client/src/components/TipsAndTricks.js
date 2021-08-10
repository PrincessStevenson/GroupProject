import React from 'react';
import './tips_tricks.css';

const TipsAndTricks = ({tipsAndTricks}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipsAndTricks => {
        return <div key={tipsAndTricks._id}>
            <a href={tipsAndTricks.link} target='_blank' class="link">{tipsAndTricks.title}</a>

            <br></br>
            <br></br>
            </div>
    });

    return (
        <section class="tips">
            <h2 class= "tips-header">Tips and Tricks</h2>
            
            <div >
                <ul>
                {tipsAndTricksNodes}  
                </ul>
            </div>
        </section>
    )
};

export default TipsAndTricks;


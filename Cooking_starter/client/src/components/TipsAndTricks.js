import React from 'react';

const TipsAndTricks = ({tipsAndTricks}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipsAndTricks => {
        return <div key={tipsAndTricks._id}>
            <a href={tipsAndTricks.link} target='_blank'>{tipsAndTricks.title}</a>

            <br></br>
            <br></br>
            </div>
    });

    return (
        <section id="tips">
            <h3>Tips and Tricks</h3>
            <br></br>
            <div>
                <ul>
                {tipsAndTricksNodes}  
                </ul>
            </div>
        </section>
    )
};

export default TipsAndTricks;


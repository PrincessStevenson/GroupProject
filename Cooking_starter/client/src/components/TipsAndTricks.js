import React from 'react';

const TipsAndTricks = ({tipsAndTricks}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipsAndTricks => {
        return <div key={tipsAndTricks._id}>
            {tipsAndTricks.title}
            <br></br>
            {tipsAndTricks.link}
            <br></br>
            <br></br>
            </div>
    });

    return (
        <section>
            <h3>Tips and Tricks</h3>
            <div>
                <ul>
                {tipsAndTricksNodes}  
                </ul>
            </div>
        </section>
    )
};

export default TipsAndTricks;


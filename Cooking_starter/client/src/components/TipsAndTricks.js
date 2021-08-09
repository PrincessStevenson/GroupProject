import React from 'react';

const TipsAndTricks = ({tipsAndTricks}) => {
    const tipsAndTricksNodes = tipsAndTricks.map(tipAndTrick => {
        return <div key={tipAndTrick._id}>
            {tipAndTrick.title}
            <br></br>
            {tipAndTrick.link}
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


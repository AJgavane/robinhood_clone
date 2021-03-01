import React from 'react'
import "../styles/Newsfeed.css"
import LineGraph from './LineGraph'
import Timeline from './Timeline'

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                {/* Chart -- portfolio value and graph */}
                <div className="newsfeed__chartSection">
                    {/* Porfolio value */}
                    <div className="newsfeed__portfolio">
                        <h1>$2,908.88</h1>
                        <p>+$373.4 (+14.72%) All time</p>
                    </div>
                    {/* Portfolio chart */}
                    <div className="newsfeed__chart">
                        <LineGraph />
                        <Timeline />
                    </div>
                </div>
                {/* Buying Power */}
                <div className="newsfeed__buying__section">
                    <h2>Buying Power</h2>
                    <h2>$9.11</h2>
                </div>
                {/* Market News */}
                {/* Popular lists */}
            </div>
        </div>
    )
}

export default Newsfeed

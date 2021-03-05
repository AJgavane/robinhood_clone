import React from 'react'
import "../styles/Newsfeed.css"
import Chip from './Chip';
import LineGraph from './LineGraph'
import Timeline from './Timeline'

const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "China",
    "Pharma",
];

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
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market_box">
                        <p>Market Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                {/* Popular lists */}
                <div className="newsfeed__popularlist__section">
                    <div className="newsfeed__popularlist_intro">
                        <h1>Popular Lists</h1>
                        <p>Show more</p>
                    </div>
                    <div className="newsfeed__popularlist__badges">
                        {popularTopics.map((topic) => (
                            <Chip 
                                key={topic}
                                label={topic}
                                image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed

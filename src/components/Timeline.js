import React from 'react'
import '../styles/Timeline.css'

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline__buttons__container">
                <div className="timeline__button">LIVE</div>
                <div className="timeline__button active">1D</div>
                <div className="timeline__button">1W</div>
                <div className="timeline__button">1M</div>
                <div className="timeline__button">3M</div>
                <div className="timeline__button">1Y</div>
                <div className="timeline__button">ALL</div>
            </div>
        </div>
    )
}

export default Timeline
import React from 'react'
import '../styles/Stats.css'

function Stats() {
    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {/* loop through and show the list of stocks in the portfolio */}
                    </div>
                </div>
                <div className="stats__header">
                    <p>Watchlist</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {/* loop through and show the list of stocks in the portfolio */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats

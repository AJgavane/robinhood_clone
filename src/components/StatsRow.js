import React from 'react'

import StockSVG from '../../assets/stock.svg'
import "../styles/StatsRow.css"

function StatsRow({key, name, openPrice, price, shares}) {
    const percentChange = ( (price - openPrice)/openPrice)*100;
    return (
        <div className="row">
            <div className="row__intro">
                <h1>{name}</h1>
                <p>{shares && (shares + "shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} height={16} />
            </div>
	  			<div className="row__numbers">
	  				<p className="row__price">{price}</p>
	  				<p className="row__percentage">{Number(percentChange).toFixed(2)}</p>
	  			</div>
        </div>
    )
}

export default StatsRow

import React from 'react'

import NegStockSVG from '../../assets/negStock.svg'
import PosStockSVG from '../../assets/posStock.svg'
import "../styles/StatsRow.css"

import { db } from './firebase'

function StatsRow(props) {

    const buyStock = () => {
        // console.log("bought", props.name);	// test
        db.collection('myStocks')
        .where("ticker", "==", props.name)
        .get()
        .then((querySnapShot)=>{
            if(!querySnapShot.empty){
                //update the record
                // console.log("available");   // test
                querySnapShot.forEach(function(doc) {
                    // console.log(doc.id, " => ", doc.data());    //test
                    db.collection('myStocks')
                    .doc(doc.id)
                    .update({
                        shares: doc.data().shares += 1
                    })
                })
            }
            else {
                // add a new record
                // console.log("Unavailable");     //test
                db.collection('myStocks')
                .add({
                    ticker: props.name,
                    shares: 1
                })
            }
        })
    }

    const percentChange = ( (props.price - props.openPrice)/props.openPrice)*100;
    let icon = (percentChange > 0) ? PosStockSVG : NegStockSVG;
    let trend = (percentChange > 0) ? "positive" : "negative";
    return (
        <div className="row" onClick={buyStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares + "shares")}</p>
            </div>
            <div className="row__chart">
                <img src={icon} height={16} />
            </div>
	  			<div className="row__numbers">
	  				<p className="row__price">{props.price}</p>
	  				<p className={`row__percentage ${trend}`}>{Number(percentChange).toFixed(2)}</p>
	  			</div>
        </div>
    )
}

export default StatsRow

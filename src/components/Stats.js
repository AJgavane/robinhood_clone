import React, { useState, useEffect } from 'react'
import axios from "axios"
import StatsRow from './StatsRow';
import { db } from './firebase';

import '../styles/Stats.css'

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const TOKEN = "c0bg22n48v6to0rovs60";

function Stats() {
    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc)=>{
                // console.log(doc.data());    // Prints ticker and #shares
                promises.push(getStockData(doc.data().ticker)
                .then((res)=>{
                    tempData.push({
                        id: doc.id,
                        data: doc.data(),
                        info: res.data
                    })
                }))
            });
            Promise.all(promises).then(()=>{
                // console.log(tempData);
                setMyStocks(tempData);
            })
        })
    };

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}${stock}&token=${TOKEN}`)
            .catch((error) =>{
                console.error("Error", error.message);
            });
    };

    useEffect(() => {
        let tempStockData = [];
        const stockList = ["TSLA", "TTM", "ARKW", "NVDA", "DAL", "ARKQ"];
        let promises = [];
        getMyStocks();
        stockList.map((stock)=> {
            promises.push(
                getStockData(stock)
                .then((res)=> {
                    //console.log(res);       // to check if we get what we want
                    tempStockData.push({name:stock, ...res.data});
                })
            )
        });
        Promise.all(promises).then(()=>{
            // console.log(tempStockData);     // to check if we get what we want
            setStockData(tempStockData);
        })
    }, []);

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header stats__list">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {/* loop through and show the list of stocks in the portfolio */}
                        {myStocks.map((stock)=>(
                            <StatsRow 
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className="stats__header stats__list">
                    <p>Watchlist</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {stockData.map((stock)=>(
                            <StatsRow 
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats

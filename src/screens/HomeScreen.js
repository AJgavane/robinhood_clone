import React from 'react'
import { View } from 'react-native'
import Header from "../components/Header"
import Newsfeed from '../components/Newsfeed'
import Stats from '../components/Stats'
import "../styles/HomeScreen.css"

function HomeScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <div className="app">
                {/* Header */}
                <div className="app__header">
                    <Header />
                </div>
                {/* Body */}
                <div className="app__body">
                    <div className="app__container">
                        <Newsfeed />
                        <Stats />
                    </div>
                </div>
            </div>
        </View>
    )
}

export default HomeScreen

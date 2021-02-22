import React from 'react'
import { View } from 'react-native'
import Header from "../components/Header"
import "../styles/HomeScreen.css"

function HomeScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <div className="homescreen">
                {/* Header */}
                <div className="homescreen__header">
                    <Header />
                </div>
                {/* Body */}
                <div className="homescreen__body">
                    
                </div>
            </div>
        </View>
    )
}

export default HomeScreen

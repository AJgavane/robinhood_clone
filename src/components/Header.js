import React from 'react'
import Logo from '../assets/robinhood.svg'
import Search from '../assets/search.svg'

import '../styles/Header.css'

function Header() {
    return (
        <div className="header__wrapper">
            {/* logo 48 x 54*/}
            <div className="header__logo">
                <img src={Logo} width={24} height={27} />
            </div>
            {/* Search */}
            <div className="header__search">
                <div className="header__search__container">
                    <div className="header__search__container__logo">
                        <img src={Search} width={24} height={27} />
                    </div>
                    <input placeholder="Search" type="search" />
                </div>
            </div>
            {/* MenuItems */}
            <div className="header__menuItems">
                <a href="#"><span>Free Stocks</span></a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    );
}

export default Header

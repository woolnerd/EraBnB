import React from 'react';
import Search from '../search/search';
import MenuContainer from '../menu/menu_container';
import {FaSuitcaseRolling} from 'react-icons/fa';
import {AiOutlineFieldTime} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <header className="header-container">
        <Link to="/">
            <div className="logo">
                <h3>Era bnb</h3>
                <div className="logos">
                    <AiOutlineFieldTime className="time-icon"/>
                    <FaSuitcaseRolling className="luggage-icon"/>
                </div>
            </div>
        </Link>
        <Search />
        <MenuContainer />
        </header>
        <div className="cushion"></div>
    </>
    )
};



export default NavBar;
import React from "react";

import classes from './Header.module.css'


const Header = () => {
const menuItems = ['Home', 'About', 'Portfolio', 'Contact']

const Menu = menuItems.map((item) => <li><a>{item}</a></li>)

return (
    <div className={classes.header}>
        <a className={classes.logo}>HAZE</a>
        <menu className={classes.menu}>
            <ul>
                {Menu}
            </ul>
        </menu>
    </div>
)};


export default Header;
import React, { useState } from "react";
import { ReactDOM } from "react";

import classes from './HeaderMobile.module.css'

import { Link } from "react-router-dom";

const HeaderModule = () => {
    const [triggerModal, setTriggerModal ] = useState(false)

    const toggleFunction = function() {
        setTriggerModal(true);
    }
    return (
        <div className={classes.header}>
            <button 
                className={classes.logo}>HAZE
                </button>
            <menu className={classes.menu}>
                <MenuIcon toggle={toggleFunction}  open={triggerModal}
                menuClass={classes.hamburgermenu}
                id='hamburgermenu'
                />
            </menu>  
            <React.Fragment>
            {ReactDOM.createPortal(<Nav />, document.getElementById('modal'))}
        </React.Fragment>    
        </div>
    ); 
}

const Nav = (props, triggerModal) => {
if (!triggerModal) return null

     return(
        <nav className={classes.mobilenav}>
             <div>
                <span className={classes.exit}></span>
                <Link to="/">Home</Link>
                <Link to="aboutus">About Us</Link>
                <Link to="portfolio">Portfolio</Link>
                <Link to="contactus">Contact Us</Link>  
            </div>
        </nav>
        )
}

   const MenuIcon = (props) => {   
        return (
            <button id={props.id} className={props.menuClass} onClick={props.toggle}>
                <svg   width="25" fill="rgb(151,126,79)" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path d="M1 6C1 5.44772 1.44772 5 2 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H2C1.44772 7 1 6.55228 1 6Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                <path d="M1 12C1 11.4477 1.44772 11 2 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H2C1.44772 13 1 12.5523 1 12Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                <path d="M1 18C1 17.4477 1.44772 17 2 17H8C8.55228 17 9 17.4477 9 18C9 18.5523 8.55228 19 8 19H2C1.44772 19 1 18.5523 1 18Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                </svg> 
            </button>        
        )
    }
export default HeaderModule;
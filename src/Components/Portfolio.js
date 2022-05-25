import React, { useState } from "react";

import BreadCrumb from "../UI/BreadCrumb";

import PortfolioImg from '../Assets/portfolio.jpg'
import data from "./PortfolioData";

import classes from './Portfolio.module.css';

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

// const PortfolioSection = () => {
// const [categories, setCategories] = useState(allCategories);
// const menu = categories.map((item) => <button>{item}</button>);
//  return (
//         {menu}
//     )
// }


const Portfolio = () => {
    return (
        <>
        <BreadCrumb
            img={PortfolioImg}
            imgAlt='Camera taking a photo of the sunset' 
            pageTitle='Portfolio'
            crumb='Home / Portfolio'
            />
            <section>
                <div className={classes.menu}>
                    {/* <PortfolioSection /> */}
                </div>
                
            </section>
        </>
    )
}

export default Portfolio;
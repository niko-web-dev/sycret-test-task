import React from 'react'

import './news.scss'

import { Link } from "react-router-dom";

const Scroll = ({ news }) => {

    return (
        <div className="scroll container" id='news__list'>
            {
                news.map( (item, index) => {
                    return (

                        <div className="news" key={index} id={index}>

                            <Link to={`/news/${index}`}>
                                <h2>{item.title}</h2>
                                <img src={item.urlToImage} alt=""/>
                            </Link>

                        </div>
                    )
                })
            }

        </div>

    );
};

export default Scroll;


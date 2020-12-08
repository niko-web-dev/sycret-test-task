import React from 'react';
import './news.scss'

import { useParams, Link, useHistory } from "react-router-dom"

const NewsPage = ({news}) => {
    const history = useHistory();

    const { userid } = useParams()
    const newsItem = news[userid]

    return (
        <div className="NewsPage container">
            <div className="news">
                <h2>{newsItem.title}</h2>
                <img src={newsItem.urlToImage} alt=""/>
                <p>{newsItem.description}</p>
                {/*<Link to={"/"}>*/}
                    <button onClick={() => history.goBack()}>Назад</button>
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default NewsPage;
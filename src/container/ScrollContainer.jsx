import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import axios from 'axios'

import Scroll from "../components/Scroll";
import NewsPage from "../components/NewsPage";


const urlAPI = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=4bb41344832f4004927c34f078743425'

const ScrollContainer = () => {

    const [news, setNews] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    // получаем данные с сервера
    const getNews = () => {
        axios
            .get(urlAPI)
            .then(res => setNews(res.data.articles));
    }

    // initialstate
    useEffect(() => {
        getNews()
    }, []);

    // ловим событие скрола
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // если флаг isFetching == true, получаем больше данных
    useEffect(() => {
        if (!isFetching) return

        function getMoreNews() {
            setNews([...news, ...news])
            setIsFetching(false)
            console.log('getMoreNews')
        }
        getMoreNews();
    }, [isFetching])

    // Определяем "низ" страницы и меняем флаг isFetching на true для  получения больше данных
    function handleScroll() {
        if (window.innerHeight
            + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight)
            return;
        setIsFetching(true);
    }

    return (
        <Router>

            <Switch>
                <Route exact path="/" render={() => <Scroll news={news}/>}/>

                <Route path="/news/:userid" render={() => <NewsPage news={news}/>} />
            </Switch>
        </Router>

    );
};

export default ScrollContainer;
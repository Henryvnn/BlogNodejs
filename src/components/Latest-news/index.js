import React from 'react'
import './latest-news-list.css'
import { Link } from 'react-router-dom'

function index() {
    const listArticle = [
        {
            id: 1,
            title: 'Only Someone Who\'s Seen The Mummy Will Pass This',
            image: 'assets/images/blog-1.jpg',
            author: 'John Doe',
            date: 'June 02, 2020',
        },
        {
            id: 2,
            title: 'Only Someone Who\'s Seen The Mummy Will Pass This',
            image: 'assets/images/blog-1.jpg',
            author: 'John Doe',
            date: 'June 02, 2020',
        },
        {
            id: 3,
            title: 'Only Someone Who\'s Seen The Mummy Will Pass This',
            image: 'assets/images/blog-1.jpg',
            author: 'John Doe',
            date: 'June 02, 2020',
        },
    ]

    return (
        <>
            {/* Latest News */}
            <div className="latest-news section">
                <div className="tcl-container">
                    <div className="main-title spacing">
                        <h2>Latest Articles</h2>
                    </div>
                    <div className="latest-news__list spacing">
                        {
                            listArticle.map((item, index) => (
                                <div className="latest-news__card" key={item.id}>
                                    <article className="article-item">
                                        <div className="article-item__thumbnail">
                                            <Link to={`/chi-tiet/${item.id}`}>
                                                <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                                            </Link>
                                        </div>
                                        <div className="article-item__content">
                                            <h2 className="article-item__title">
                                                <Link to={`/chi-tiet/${item.id}`}>
                                                    {item.title}
                                                </Link>
                                            </h2>
                                            <div className="article-item__info">
                                                <div className="article-item__author-image">
                                                    <Link to={`/chi-tiet/${item.id}`}>
                                                        <img src="assets/images/john-doe.png" alt="john-doe" />
                                                    </Link>
                                                </div>
                                                <div className="article-item__info-right">
                                                    <div className="article-item__author-name">
                                                        <Link to={`/chi-tiet/${item.id}`}>
                                                            <strong>{item.author}</strong>
                                                        </Link>
                                                    </div>
                                                    <div className="article-item__datetime">
                                                        <div className="date">June 02, 2020</div>
                                                        <div className="time">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                                                </path>
                                                            </svg>
                                                            1 min</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default index

import React from 'react';
import './styles.css';


const Article = (props) => {
    if (props.index === 0) {
        return (
            <div className="article">
                <h3>{props.article.title}</h3>
                <p className="lead"><strong>{props.article.dateline}</strong>&nbsp;{props.article.chapeau}</p>
                <p className="readmore"><a href={props.article.link}>Lire l'article</a></p>
                <br/>
            </div>
        );
    } else {
        return (
            <div className="article">
                <span className="date">{props.article.publication_date}</span>&nbsp;<a href={props.article.link}>{props.article.title}</a>
            </div>
        );
    }
}

export default Article;
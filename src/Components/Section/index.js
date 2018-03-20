import React from 'react';
import './styles.css';
import Article from '../Article';


const Section = (props) => {
    if (!props.articles || props.articles.length === 0) {
        return null;
    }

    const items = props.articles.map((article, index) => {
        return(
            <Article key={index} index={index} article={article}/>
        );
    });

    const readmore = () => {
        if (props.section.link && props.section.link.length > 0) {
            return <p className="readmore section"><a href={props.section.link}>Lire tous les articles {props.section.section.toLowerCase()}</a></p>
        }
    };
    return(
        <div className="section">
            {props.children}
            {items}
            {readmore()}
            <br/>
            <hr/>
        </div>
    );
}

export default Section;
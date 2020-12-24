import React from 'react';
import './News.css';
const Headline = ({news}) => {
    return (  
        <div className="top-headline-div">
            <a href={news.url} target="_blank" rel="noopener noreferrer"><p className="headline-title">{news.title}</p></a>
            <p className="headline-desc">{news.description}</p>
            <hr className="solid"/>
        </div>
    );
}
 
export default Headline;
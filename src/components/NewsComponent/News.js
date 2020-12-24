import React from 'react';
import './News.css';
const News = ({news}) => {
    return ( 
        <div className="card">
            <div className="card-image">
               <a href={news.url} target="_blank" rel="noopener noreferrer"><img src={news.urlToImage} alt="" className="image"/></a>
            </div>
            <div className="content">
                <h2>{news.title}</h2>
                <p>{news.description}</p>
            </div>
        </div>
     );
}
 
export default News;
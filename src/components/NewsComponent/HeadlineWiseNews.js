import React from 'react';
import axios from 'axios';
import News from './News';
import './News.css';
class HeadlineWiseNews extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            catData:[]
        }
    }
    componentDidMount()
    {
        const url1=`https://newsapi.org/v2/${this.props.headline.type}?${this.props.headline.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        
        axios.get(url1).then((response) => {
            this.setState({catData: response.data.articles});
        });
        
    }
    render()
    {
        return(
            <div className="daily_news_col">
                {this.state.catData.map((news) =>(
                    <News 
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        );
    }
}
export default HeadlineWiseNews;
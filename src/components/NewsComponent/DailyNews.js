import React from 'react';
import axios from 'axios';
import News from './News';
import './News.css';
class DailyNews extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:[],
            headline:[]
        }
    }
    componentDidMount()
    {
        const url1=`https://newsapi.org/v2/${this.props.daily_news1.type}?${this.props.daily_news1.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        const url2=`https://newsapi.org/v2/${this.props.daily_news2.type}?${this.props.daily_news2.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        const url3=`https://newsapi.org/v2/${this.props.daily_news3.type}?${this.props.daily_news3.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        axios.get(url1).then((response) => {
            this.setState({data: response.data.articles});
        });
        axios.get(url2).then((response) => {
            this.setState({data: response.data.articles});
        });
        axios.get(url3).then((response) => {
            this.setState({data: response.data.articles});
        });
    }
    render()
    {
        return(
            <div className="daily_news_col">
                {this.state.data.map((news) =>(
                    <News 
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        );
    }
}
export default DailyNews;
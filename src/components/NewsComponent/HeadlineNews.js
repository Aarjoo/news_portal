import React from 'react';
import axios from 'axios';
import Headline from './Headline';
import './News.css';
class HeadlineNews extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            headline:[]
        }
    }
    componentDidMount()
    {
        const headlineurl1=`https://newsapi.org/v2/${this.props.headline1.type}?${this.props.headline1.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        const headlineurl2=`https://newsapi.org/v2/${this.props.headline2.type}?${this.props.headline2.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        const headlineurl3=`https://newsapi.org/v2/${this.props.headline3.type}?${this.props.headline3.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        const headlineurl4=`https://newsapi.org/v2/${this.props.headline4.type}?${this.props.headline4.source}&apiKey=751e0738c6954667b6d1a78a526f914c`;
        axios.get(headlineurl1).then((response) => {
            this.setState({headline: response.data.articles});
        });
        axios.get(headlineurl2).then((response) => {
            this.setState({headline: response.data.articles});
        });
        axios.get(headlineurl3).then((response) => {
            this.setState({headline: response.data.articles});
        });
        axios.get(headlineurl4).then((response) => {
            this.setState({headline: response.data.articles});
        });
    }
    render()
    {
        return(
            <div className="headline_news_col">
                {this.state.headline.map((news) =>(
                    <Headline 
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        );
    }
}
export default HeadlineNews;
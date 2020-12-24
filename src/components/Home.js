import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DailyNews from './NewsComponent/DailyNews';
import HeadlineNews from './NewsComponent/HeadlineNews';
import HeadlineWiseNews from './NewsComponent/HeadlineWiseNews';
import './NewsComponent/News.css';

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            daily_news1:{
                type:"everything",
                source:"q=bitcoin"

            },
            daily_news2:{
                type:"everything",
                source:"q=apple&from=2020-10-07&to=2020-10-07&sortBy=popularity"

            },
            daily_news3:{
                type:"everything",
                source:"domains=techcrunch.com,thenextweb.com"
            },
            headline1:{
                type:"top-headlines",
                source:"country=us"

            },
            headline2:{
                type:"top-headlines",
                source:"sources=bbc-news"

            },
            headline3:{
                type:"top-headlines",
                source:"country=de&category=business"

            },
            headline4:{
                type:"top-headlines",
                source:"q=trump"

            }
        }
    }
    render()
    {
        return(
                <div className="grid">
                    <div className="left-align">
                        <Switch>
                            <Route exact path="/" render={(props) => (<DailyNews daily_news1={this.state.daily_news1} daily_news2={this.state.daily_news2} daily_news3={this.state.daily_news3}/>)}/>
                        </Switch>
                        <Switch>
                            <Route exact path="/us" render={(props) => (<HeadlineWiseNews headline={this.state.headline1}/>)}/>
                        </Switch>
                        <Switch>
                            <Route exact path="/bbc" render={(props) => (<HeadlineWiseNews headline={this.state.headline2}/>)}/>
                        </Switch>
                        <Switch>
                            <Route exact path="/germen" render={(props) => (<HeadlineWiseNews headline={this.state.headline3}/>)}/>                          
                        </Switch>
                        <Switch>
                            <Route exact path="/trump" render={(props) => (<HeadlineWiseNews headline={this.state.headline4}/>)}/>                          
                        </Switch>
                   </div> 
               <div className="right-align">
                   <HeadlineNews headline1={this.state.headline1} headline2={this.state.headline2} headline3={this.state.headline3} headline4={this.state.headline4}/>
               </div>                      
           </div>
        );
    }
}
export default Home;
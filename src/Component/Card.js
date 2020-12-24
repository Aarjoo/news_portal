import React from 'react';
import '../CSS/Card.css';
class Card extends React.Component
{
    render()
    {
        return(
            <div className="card">
                <p>{this.props.quotes.text}</p>
                <h3>~ {this.props.quotes.author}</h3>
            </div>
        )
    }
}
export default Card;
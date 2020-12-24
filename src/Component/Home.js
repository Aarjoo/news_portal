import React, {useState} from 'react';
import data from '../Data/data.json';
import Card from '../Component/Card';
import '../CSS/Home.css';
const Home =() =>
{
    // state={
    //     quotes:data
    // }
    const [quotes] = useState(data);
    //getQuotes(data);
    
        return(
            <div className="grid">
                {quotes.map(
                    (quotes) =>
                    (
                        <Card 
                        key={quotes.id}
                        quotes={quotes}
                        />
                    )
                )}
            </div>
        )
    
}
export default Home;
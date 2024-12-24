// src/components/Cards.jsx
// rafce / rfce

import { useState, useEffect } from 'react';
import CardsItem from './CardsItem';

function Cards() {

    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        fetch('http://localhost:3001/cards')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            })
            .catch(e => console.log(e.message))
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                cards && cards.length > 0 && 
                cards.map(card => 
                    <CardsItem 
                    key={card.id}
                    card={card} />
                )
            }
        </>
    );
}

export default Cards;

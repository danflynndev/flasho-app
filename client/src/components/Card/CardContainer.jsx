import { useEffect, useState } from "react";
import { Card } from "./Card";

export const CardContainer = (props) => {
    const { activeDeck } = props;

    const [card, setCard] = useState(activeDeck.cards[0]);

    useEffect(() => {setCard(activeDeck.cards[0])}, [activeDeck])

    const handleCardChange = (isNext) => {
        let idx; 
        const maxIndex = activeDeck.cards.length - 1;
        if (isNext) {
            idx = card._id + 1 > maxIndex ? 0 : card._id + 1;
        } else {
            idx = card._id - 1 < 0 ? maxIndex : card._id - 1;
        } 
        
        setCard({...activeDeck.cards[idx]});
    }

    return (
        <Card 
            card={card} 
            handleCardChange={handleCardChange}
        />
    )
}
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const CardContainer = (props) => {
    const { activeDeck } = props;

    const [card, setCard] = useState(activeDeck.cards[0]);
    const [cardIdx, setCardIdx] = useState(0);

    // initializes first card to display 
    useEffect(() => {
        setCard(activeDeck.cards[0]);
        setCardIdx(0);
    }, [activeDeck])

    const handleCardChange = (isNext) => {
        let nextIdx; 
        const maxIndex = activeDeck.cards.length - 1;
        // increment/decrement or wrap around to first/last card
        if (isNext) {
            nextIdx = cardIdx + 1 > maxIndex ? 0 : cardIdx + 1;
        } else {
            nextIdx = cardIdx - 1 < 0 ? maxIndex : cardIdx - 1;
        } 
        
        setCardIdx(nextIdx)
        setCard({...activeDeck.cards[nextIdx]});
    }

    return (
        <Card 
            deckSize={activeDeck.cards.length}
            card={card} 
            cardIdx={cardIdx}
            handleCardChange={handleCardChange}
        />
    )
}
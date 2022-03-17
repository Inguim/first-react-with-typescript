import { createContext, useState } from 'react';

type Props = {
    children: React.ReactChild;
};

type ProviderValues = {
    cards: Array<Card>;
    newCard: (callback: Card) => void;
    deleteCard: (id: number) => void;
};

type Card = {
    id: number;
    title: string;
    details: string;
    date: Date;
};

const CardsContext = createContext<ProviderValues>({} as ProviderValues);

export const CardsProvider = ({ children }: Props) => {
    const [cards, setCard] = useState<Array<Card>>([]);

    function newCard(data: Card) {
        setCard(prev => [...prev, data]);
    }

    function deleteCard(id: number) {
        setCard(prev => prev.filter(item => item.id !== id));
    }

    return (
        <CardsContext.Provider value={{ cards, newCard, deleteCard }}>
            {children}
        </CardsContext.Provider>
    )
}

export default CardsContext;
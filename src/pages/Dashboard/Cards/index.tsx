import { useCards } from "../../../hooks";
import { Button } from "../../../styles/Button";
import { randomRGBA } from "../../../utils";
import { Cards, Card as Box } from "./styles";

const Card = () => {
  const { cards, deleteCard } = useCards();

  return (
    <Cards>
      {cards.map((card) => (
        <Box
          backgroudColor={randomRGBA(1)}
          color={randomRGBA(0.8)}
          key={card.id}
        >
          <div>
            <small>{card.date.toLocaleDateString()}</small>
            <h3>{card.title}</h3>
            <p>{card.details}</p>
            <Button backgroundColor="transparent" color={randomRGBA(1)} onClick={() => deleteCard(card.id)} >Remover</Button>
          </div>
        </Box>
      ))}
    </Cards>
  );
};

export default Card;

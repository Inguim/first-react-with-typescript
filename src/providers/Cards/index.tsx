import { CardsProvider as Box } from '../../contexts/cards';

type Cards = {
    children: React.ReactChild;
};

const CardsProvider = ({ children }: Cards) => {
  return <Box>{children}</Box>;
};

export default CardsProvider;
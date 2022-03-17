import { useContext } from "react";
import CardsContext from "../../contexts/cards";

export default function useCards() {
  const context = useContext(CardsContext);

  return context;
}

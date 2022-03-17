import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCards } from "../../../hooks";
import { Button } from "../../../styles/Button";
import colors from "../../../styles/colors";
import { FakeForm } from "../../../styles/FakeForm";
import { Input } from "../../../styles/Input";
import { MessageError } from "../../../styles/MessageError";

const NewCard = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const { newCard } = useCards();
  const navigate = useNavigate();

  const handleNewCard = (data: {
    title: string;
    details: string;
    date: string;
  }) => {
    if (data.title !== "" && data.details !== "" && data.date !== '') {
      newCard({ ...data, id: Math.floor(Math.random() * 100 + 1), date: new Date(data.date) });
      navigate("../cards");
    }
    setMessageError("Informe todos os campos 🙈");
  };

  return (
    <FakeForm>
      <Input
        placeholder="Titulo"
        value={title}
        error={messageError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input
        placeholder="Descrição"
        value={details}
        error={messageError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDetails(e.target.value)
        }
      />
      <Input
        type="date"
        placeholder="Data"
        value={date}
        error={messageError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <MessageError>{messageError}</MessageError>
      <Button
        backgroundColor={colors.green}
        type="button"
        onClick={() => handleNewCard({ title, details, date })}
      >
        Adicionar card
      </Button>
    </FakeForm>
  );
};

export default NewCard;

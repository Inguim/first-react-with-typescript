import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { MessageError } from "../../styles/MessageError";
import { FakeForm } from "../../styles/FakeForm";
import { Input } from "../../styles/Input";

const Register = () => {
  const { Register, Login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const history = useNavigate();

  async function handleRegister({
    name,
    password,
    email,
  }: {
    name: string;
    password: string;
    email: string;
  }) {
    if (email !== "" || password !== "" || name !== "") {
      await Register({
        email: email,
        password: password,
        name: name,
      });
      await Login(email, password);

      history("/");
    } else {
      setMessageError("Informe todos os campos no cadastro 🙈");
    }
  }

  return (
    <Container>
      <FakeForm>
        <Input
          type="name"
          placeholder="Cesar"
          value={name}
          error={messageError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          error={messageError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          type="password"
          placeholder="1234"
          value={password}
          error={messageError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <MessageError>{messageError}</MessageError>
        <Button
          backgroundColor="--green"
          onClick={() => handleRegister({ name, password, email })}
        >
          Cadastrar
        </Button>
      </FakeForm>
    </Container>
  );
};

export default Register;

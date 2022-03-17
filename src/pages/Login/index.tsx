import { useState } from "react";

import { useAuth } from "../../hooks";

import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { MessageError } from "../../styles/MessageError";
import { Link, useNavigate } from "react-router-dom";
import { FakeForm } from "../../styles/FakeForm";
import { Input } from "../../styles/Input";
import { ButtonLink } from "../../styles/ButtonLink";


const Login = (): JSX.Element => {
  const { Login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const history = useNavigate();

  async function handleLogin() {
    if (email !== "" && password !== "") {
      await Login(email, password).then((response) => {
        if (response) {
          setMessageError(response);
        } else {
          history("/");
        }
      });
    } else {
      setMessageError("Você esta tentando logar com informações vazias 😨?");
    }
  }

  return (
    <Container>
      <FakeForm>
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
        <Button backgroundColor="--green" onClick={() => handleLogin()}>
          Login
        </Button>
        <ButtonLink backgroundColor="--light-blue">
          <Link to="/home/register">Registre-se</Link>
        </ButtonLink>
      </FakeForm>
    </Container>
  );
};

export default Login;

import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { MessageError } from "../../styles/MessageError";
import { useNavigate } from "react-router-dom";
import { FakeForm } from "../../styles/FakeForm";
import { Input } from "../../styles/Input";

const Login = (): JSX.Element => {
  const { Login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const history = useNavigate();

  async function handleLogin() {
    if (email !== "" && password !== "") {
      const response = await Login({
        email: email,
        password: password,
      });

      if(response) {
        setMessageError(response);
      } else {
        history('/');
      }
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
        <Button
          backgroundColor="--light-blue"
          onClick={() => history("/home/register")}
        >
          Registre-se
        </Button>
      </FakeForm>
    </Container>
  );
};

export default Login;

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Content } from "./styles";
import { ButtonLink } from "../../styles/ButtonLink";

const Welcome = (): JSX.Element => {
  const { Logout, user } = useAuth();

  async function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <Content>
        <h1>Welcome primo, {user?.name} 🐵</h1>
        <ButtonLink type="button">
          <Link to="/dashboard">Dashboard</Link>
        </ButtonLink>
        <Button backgroundColor="--red" onClick={() => handleLogout()}>
          Logout
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;

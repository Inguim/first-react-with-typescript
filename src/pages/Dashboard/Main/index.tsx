import { NavLink, Outlet } from "react-router-dom";
import colors from "../../../styles/colors";
import { Container, Items, Navbar, TextMessage } from "./styles";

const activeLink = {
  backgroundColor: colors.blue_2,
  border: "transparent",
};

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <Navbar>
        <Items>
          <li>
            <NavLink
              to="cards"
              style={({isActive}) => isActive ? activeLink : {}}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="card/new"
              style={({isActive}) => isActive ? activeLink : {}}
            >
              Novo card
            </NavLink>
          </li>
        </Items>
      </Navbar>
      {/* <TextMessage>Oi 😳, so temos isso aqui!</TextMessage> */}
      <Outlet />
    </Container>
  );
}

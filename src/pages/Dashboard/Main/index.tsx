import { NavLink, Outlet } from "react-router-dom";
import { Cards } from "../../../providers";
import colors from "../../../styles/colors";
import { Container, Items, Navbar, TextMessage } from "./styles";

const activeLink = {
  borderColor: colors.blue_2,
  color: colors.blue_2,
};

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <Navbar>
        <Items>
          <li>
            <NavLink
              to="cards"
              style={({ isActive }) => (isActive ? activeLink : {})}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="card/new"
              style={({ isActive }) => (isActive ? activeLink : {})}
            >
              Novo card
            </NavLink>
          </li>
        </Items>
      </Navbar>
      <TextMessage>Uga</TextMessage>
      <Cards>
        <Outlet />
      </Cards>
    </Container>
  );
}

import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Provide } from "../Provide";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <Container>
        <Link to="/">
      <Logo />
        </Link>
      <Input placeholder="Presquisar pelo título" />

      <Link to="/perfil">
        <Provide />
      </Link>
    </Container>
  );
}

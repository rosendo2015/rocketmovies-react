import { Container, Form, Avatar } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function Perfil() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonLink title="Voltar" />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/rosendo2015.png" alt="foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <div>
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="Email" icon={FiMail} />
          <Input type="password" placeholder="Senha atual" icon={FiLock} />
          <Input type="password" placeholder="Nova senha" icon={FiLock} />
          <Button title="Salvar" />
        </div>
      </Form>
    </Container>
  );
}

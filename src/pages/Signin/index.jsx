import { Container, Form, Background } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { RxLockClosed } from "react-icons/rx";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

export function Signin() {
  return (
    <Container>
      <Form>
        <Logo />
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <Input placeholder="Email" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={RxLockClosed} />

        <Button title="Entrar" />

      <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}

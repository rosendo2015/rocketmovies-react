import { Container, Form, Background } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { AiOutlineMail } from "react-icons/ai";
import { RxLockClosed } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <Container>
      <Form>
        <Logo />
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={AiOutlineMail} />

        <Input placeholder="Senha" type="password" icon={RxLockClosed} />

        <Button title="Cadastrar" />
        <div>
          <Link to="/">
            <ButtonLink title="Voltar para o login" />
          </Link>
        </div>
      </Form>
      <Background />
    </Container>
  );
}

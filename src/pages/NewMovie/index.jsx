import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonLink } from "../../components/ButtonLink";
import { ButtonBlack } from "../../components/ButtonBlack";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Link } from "react-router-dom";

import { NewItem } from "../../components/NewItem";
export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
        <ButtonLink title="Voltar" />
        </Link>

        <h1>Novo filme</h1>

        <div>
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Sua nota (0 a 5)" />
        </div>
        <Textarea placeholder="Observações" />
        <Section title="Marcadores">
          <NewItem value="React"/>
          <NewItem isNew value="Novo marcador"/>
        </Section>
        <div>
          <ButtonBlack title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </main>
    </Container>
  );
}

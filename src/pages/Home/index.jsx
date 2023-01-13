import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { RxPlus } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h1>Meus Filmes</h1>
          <div>
            <Link to="/newmovie">
              <Button icon={RxPlus} title="Adicionar Filme" />
            </Link>
          </div>
        </div>
        <List />
        <List />
        <List />
      </main>
    </Container>
  );
}

import { Container } from "./styles";

export function Section({ title, children }) {
  return <Container>
    <h2>
        {title}
    </h2>
    <div className="child">
      
      {children}

    </div>
    
    </Container>;
}

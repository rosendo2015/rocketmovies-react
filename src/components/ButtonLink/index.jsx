import { Container, Arrow } from "./styles";
import { RiArrowLeftLine } from 'react-icons/ri';
export function ButtonLink({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      <Arrow>
        <RiArrowLeftLine />
      </Arrow>
      {title}
    </Container>
  );
}

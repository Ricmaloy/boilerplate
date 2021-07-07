import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um programador de frente para um computador"
    />
  </S.Wrapper>
);

export default Main;

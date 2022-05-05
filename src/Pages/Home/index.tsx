import React from 'react';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../Themes/theme';
import Logo from '../../assets/logo_tinnova.png';
import {
  Container,
  LogoContainer,
  LogoImage,
  Content,
  Title,
  SubTitle,
  ButtonContainer,
  ButtonText,
} from './styles';

const Home: React.FC = () => {

  const navigation = useNavigate();

  const handleNav = () => {
    navigation('/questionOne');
    console.log('foi para a primeira questão');
  }

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} alt="Tinnova dark logotype" />
      </LogoContainer>
      <Content>
        <Title> Bem vindo ao meu teste! </Title>
        <SubTitle>
          Essa é uma aplicação simples, criada apenas para responder todas as questões do meu teste.<br />
          Boa sorte para mim!
        </SubTitle>
        <ButtonContainer>
          <Button onClick={() => handleNav()} backgroundColor={colors.pink} width="50%" >
            <ButtonText>Let's Go!</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default Home;
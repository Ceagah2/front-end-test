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
        <Title> Welcome to the app </Title>
        <SubTitle>
          This is a simple app, to answer all the questions of my Front end test. <br />
          Good luck to me!
        </SubTitle>
        <ButtonContainer>
          <Button onClick={() => handleNav()} backgroundColor={colors.pink} width="50%" >
            <ButtonText>Start !</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default Home;
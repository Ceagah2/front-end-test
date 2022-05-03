import React from 'react';
import Button from '../../Components/Button';
import { useHistory } from 'react-router-dom';
import { colors } from '../../Themes/theme';

import {
  Container,
  Content,
  Title,
  SubTitle,
  ButtonContainer,
  ButtonText,
} from './styles';

const Home: React.FC = () => {

  const history = useHistory();

  const handleNav = () => {
    history.push('/questionOne');
    console.log('foi para a primeira questão');
  }

  return (
    <Container>
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
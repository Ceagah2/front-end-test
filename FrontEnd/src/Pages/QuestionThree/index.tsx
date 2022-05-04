import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Question from '../../Components/Question';
import { colors } from '../../Themes/theme';


import {
  Container,
  Content,
  QuestionText,
  InputGroup,
  InputLabel,
  TextInput,
  ButtonContainer,
  Footer,
} from './styles';


const Three: React.FC = () => {
  const navigate = useNavigate();
  const [factorialNumber, setFactorialNumber] = useState<string>();
  const [factoredNumber, setFactoredNumber] = useState<string[]>([]);
  return (
    <Container>
      <Question questionNumber={3} questionTitle='Fatorial'>
        <Content>
          <QuestionText>
            Considerando um numero inteiro X, insira X no campo abaixo, para que seja calculado o seu fatorial.
          </QuestionText>
          <InputGroup>
            <InputLabel>Insira o número aqui: </InputLabel>
            <TextInput type="text" value={factorialNumber} onChange={() => setFactorialNumber(factorialNumber)} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Fatorial: </InputLabel>
            <TextInput disabled value={factoredNumber} />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => alert('...')}>
            Fatorar
          </Button>
        </ButtonContainer>
      </Question>
      <Footer>
        <Button onClick={() => navigate('/questionFour')}>
          Próxima questão
        </Button>
      </Footer>
    </Container>
  );
}

export default Three;
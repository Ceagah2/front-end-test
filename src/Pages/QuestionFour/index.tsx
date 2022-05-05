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


const Four: React.FC = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState<string>();
  const [sumOfAllNumbers, setSumOfAllNumbers] = useState<string>();
  return (
    <Container>
      <Question questionNumber={4} questionTitle='Soma dos múltiplos de 3 e 5'>
        <Content>
          <QuestionText>
            Considerando um numero inteiro X, insira X no campo abaixo, somado todos os números múltiplos de 3 e de 5.
            Ex: Se X = 10, o resultado Arr[X] 23, ois os números múltiplos de 3 e 5 são: 3, 5, 6, 9, e somados dão 23.
          </QuestionText>
          <InputGroup>
            <InputLabel>Insira o número aqui: </InputLabel>
            <TextInput type="text" value={number} onChange={() => setNumber(number)} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Fatorial: </InputLabel>
            <TextInput disabled value={sumOfAllNumbers} />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => alert('...')}>
            Fatorar
          </Button>
        </ButtonContainer>
      </Question>
      <Footer>
        <Button onClick={() => navigate('/questionFive')}>
          Próxima questão
        </Button>
      </Footer>
    </Container>
  );
}

export default Four;
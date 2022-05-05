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


const Two: React.FC = () => {
  const navigate = useNavigate();
  const [numberVector, setNumberVector] = useState<string[]>([]);
  const [sortedArray, setSortedArray] = useState<string[]>([]);

  return (
    <Container>
      <Question questionNumber={2} questionTitle='Algoritmo de ordenação Bubble Sort'>
        <Content>
          <QuestionText>
            Considerando um vetor de numero V. Você deverá inserir N números inteiros, de forma aleatória no campo abaixo.

          </QuestionText>
          <InputGroup>
            <InputLabel>Insira os números aqui, separados por uma virgula </InputLabel>
            <TextInput type="text" value={numberVector} name="numberVector" onChange={() => setNumberVector(numberVector)} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Array organizado </InputLabel>
            <TextInput disabled value={sortedArray} />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => alert('...')}>
            Organizar
          </Button>
        </ButtonContainer>
      </Question>
      <Footer>
        <Button onClick={() => navigate('/questionThree')}>
          Próxima questão
        </Button>
      </Footer>
    </Container>
  );
}

export default Two;
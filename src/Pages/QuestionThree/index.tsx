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
  const [factorialNumber, setFactorialNumber] = useState<number>();
  const [factoredNumber, setFactoredNumber] = useState<string[]>([]);


  const factorial = (number: number): number => {
    if (number === 0) {
      return 1;
    }
    return number * factorial(number - 1);
  }
  const factored = (number: number): string[] => {
    const factoredNumber = [];
    for (let i = 1; i <= number; i++) {
      factoredNumber.push(`${i}! = ${factorial(i)}`);
    }
    return factoredNumber;
  }
  const handleFactorial = () => {
    if (factorialNumber) {
      setFactoredNumber(factored(factorialNumber));
    }
  }

  const handleFactorialNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFactorialNumber(Number(value));
  }

  return (
    <Container>
      <Question questionNumber={3} questionTitle='Fatorial'>
        <Content>
          <QuestionText>
            Considerando um numero inteiro X, insira X no campo abaixo, para que seja calculado o seu fatorial.
          </QuestionText>
          <InputGroup>
            <InputLabel>Insira o número aqui </InputLabel>
            <TextInput
              type='number'
              onChange={handleFactorialNumber}
              value={factorialNumber}
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Fatorial </InputLabel>
            <TextInput readOnly value={factorialNumber} />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => handleFactorial()}>
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
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

  // criar uma função que identifica oo numero que o usuário entrou, e soma todos os numeros multiplos de 3 e 5 entre 1 e o numero, com exceção do numero inserido 

  const Numbers = (number: number): number => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }

  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNumber(value);
  }

  const handleSumOfAllNumbers = () => {
    if (number) {
      setSumOfAllNumbers(`A soma dos números multiplos de 3 e 5 entre 1 e ${number} é ${Numbers(Number(number))}`);
    }
  }


  return (
    <Container>
      <Question questionNumber={4} questionTitle='Soma dos múltiplos de 3 e 5'>
        <Content>
          <QuestionText>
            Considerando um numero inteiro X, insira X no campo abaixo, somado todos os números múltiplos de 3 e de 5.
            Ex: Se X = 10, o resultado Arr[X] 33, pois os números múltiplos de 3 e 5 são: 3, 5, 6, 9 e 10 que somados dão 23.
          </QuestionText>
          <InputGroup>
            <InputLabel>Insira o número aqui: </InputLabel>
            <TextInput
              type='number'
              onChange={handleNumber}
              min="0"
            />
          </InputGroup>
          <InputGroup>
            {sumOfAllNumbers && <span>{sumOfAllNumbers}</span>}
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => handleSumOfAllNumbers()}>
            Somar
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
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

interface Votes {
  totalVotes: number;
  blankVotes: number;
  nullVotes: number;
  eligibleVotes: number;
}

const One: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<Votes>({
    totalVotes: 0,
    blankVotes: 0,
    nullVotes: 0,
    eligibleVotes: 0,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleCalculate = () => {
    const { totalVotes, blankVotes, nullVotes } = values;
    const eligibleVotes = totalVotes - blankVotes - nullVotes;
    setValues({
      ...values,
      eligibleVotes,
    });
    alert('Calculado');
  }


  return (
    <Container>
      <Question questionNumber={1} questionTitle='Voto em relação ao total de eleitores'>
        <Content>
          <QuestionText>
            Considerando um total de <strong> X </strong> eleitores, insira uma quantidade de eleitores que votaram nulo, e uma quantidade
            que anularam o voto.
            As inserções devem ser números inteiros.
            A resposta será dada em porcentagem total de votos, porcentagem de votos nulos, porcentagem de votos em branco
            e a porcentagem de votos válidos, em relação ao total de eleitores.
          </QuestionText>
          <InputGroup>
            <InputLabel>Total de eleitores: </InputLabel>
            <TextInput type="number" value={values.totalVotes} onChange={() => handleInput} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos em branco: </InputLabel>
            <TextInput type="number" value={values.blankVotes} onChange={() => handleInput} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos nulos: </InputLabel>
            <TextInput type="number" value={values.nullVotes} onChange={() => handleInput} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos válidos: </InputLabel>
            <TextInput disabled value={values.eligibleVotes} />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => handleCalculate()}>
            Calcular
          </Button>
        </ButtonContainer>
      </Question>
      <Footer>
        <Button onClick={() => navigate('/questionTwo')}>
          Próxima questão
        </Button>
      </Footer>
    </Container>
  );
}

export default One;
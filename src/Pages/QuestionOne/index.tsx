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
  QuestionAnswer,
} from './styles';

interface Votes {
  totalVotes: number;
  blankVotes: number;
  nullVotes: number;
  eligibleVotes: number;
}

const One: React.FC = () => {
  const navigate = useNavigate();
  const [blankPercentage, setBlankPercentage] = useState<number>(0);
  const [nullPercentage, setNullPercentage] = useState<number>(0);
  const [eligiblePercentage, setEligiblePercentage] = useState<number>(0);
  const [answer, setAnswer] = useState<boolean>(false);

  const [votes, setVotes] = useState<Votes>({
    totalVotes: 0,
    blankVotes: 0,
    nullVotes: 0,
    eligibleVotes: 0,
  });


  const calculateBlankVotes = () => {
    const { totalVotes, blankVotes } = votes;
    const blankVotesPercentage = (blankVotes / totalVotes) * 100;
    setBlankPercentage(blankVotesPercentage);
  }

  const calculateNullVotes = () => {
    const { totalVotes, nullVotes } = votes;
    const nullVotesPercentage = (nullVotes / totalVotes) * 100;
    setNullPercentage(nullVotesPercentage);
  }

  const calculateEligibleVotes = () => {
    const { totalVotes, eligibleVotes } = votes;
    const eligibleVotesPercentage = (eligibleVotes / totalVotes) * 100;
    setEligiblePercentage(eligibleVotesPercentage);
  }
  const calculateTotalVotes = () => {
    const { totalVotes, blankVotes, nullVotes } = votes;
    const eligibleVotes = totalVotes - blankVotes - nullVotes;
    setVotes({ ...votes, eligibleVotes });
    calculateEligibleVotes();
  }

  const calculateVotes = (): void => {
    calculateBlankVotes();
    calculateNullVotes();
    calculateEligibleVotes();
    calculateTotalVotes();
    setAnswer(true);
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setVotes({ ...votes, [event.target.name]: event.target.value });
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
            <InputLabel>Total de eleitores </InputLabel>
            <TextInput
              type='number'
              name='totalVotes'
              value={votes.totalVotes}
              onChange={handleChange}
              min='0'
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos em branco </InputLabel>
            <TextInput
              type='number'
              name='blankVotes'
              value={votes.blankVotes}
              onChange={handleChange}
              min='0'
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos nulos </InputLabel>
            <TextInput
              type='number'
              name='nullVotes'
              value={votes.nullVotes}
              onChange={handleChange}
              min='0'
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Votos válidos </InputLabel>
            <TextInput readOnly value={votes.eligibleVotes} min='0' />
          </InputGroup>
        </Content>
        <ButtonContainer>
          <Button onClick={() => calculateVotes()}>
            Calcular
          </Button>
        </ButtonContainer>
        {answer && (
          <QuestionAnswer>
            A porcentagem de votos nulos é de <strong>{nullPercentage}%</strong>
            <br />
            A porcentagem de votos em branco é de <strong>{blankPercentage}%</strong>
            <br />
            A porcentagem de votos válidos é de <strong>{eligiblePercentage}%</strong>
          </QuestionAnswer>
        )}
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
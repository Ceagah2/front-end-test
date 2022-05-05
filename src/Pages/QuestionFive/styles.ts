import styled from 'styled-components';
import { colors, sizes, fonts } from '../../Themes/theme';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
`;

export const Content = styled.main`
  width: 80% ;
  height:80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;
export const QuestionText = styled.span`
  margin-bottom: 20px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const InputLabel = styled.label``
export const TextInput = styled.input``;
export const QuestionAnswer = styled.span``;
export const ButtonContainer = styled.div`
  width: 20vw;
  height: 5vh;
`;


export const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
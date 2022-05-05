import styled from 'styled-components';
import { sizes, fonts, colors } from '../../Themes/theme';

export const Container = styled.article`
  width: 80vw;
  min-height: 80vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  border-radius: 20px;
  background: ${colors.background};
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: -30px;
`;
export const QuestionNumber = styled.h1`
  font: ${sizes.title} ${fonts.montserrat} bold;
  margin-right: 10px;
`;
export const QuestionTitle = styled.h1`
  font: ${sizes.title} ${fonts.code} bold;
`;



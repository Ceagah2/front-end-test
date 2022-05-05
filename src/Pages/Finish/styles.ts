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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background}; 
  padding: 20px;
  border-radius: 20px;
  border: 1px solid ${colors.black};
`;
export const QuestionText = styled.span`
  font-size: 1rem; 
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
`;
export const ListItem = styled.li``;
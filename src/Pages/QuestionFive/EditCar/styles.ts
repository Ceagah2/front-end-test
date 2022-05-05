import styled from 'styled-components';
import { colors } from '../../../Themes/theme';

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
  height: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  min-width: 80vw;
  padding: 0px 20px;
`;
export const Title = styled.h1``;
export const TextArea = styled.textarea`
  resize: none;
  min-width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
export const InputTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  margin-right: 20px;
  font-size: 1rem;
  font-weight: bold;
  
`;
export const Input = styled.input``;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
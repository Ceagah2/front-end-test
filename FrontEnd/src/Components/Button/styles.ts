import styled from 'styled-components';
import { colors } from '../../Themes/theme';

type ButtonProps = {
  color?: string;
  width?: string;
  backgroundColor?: string;
}


export const Container = styled.div.attrs((props: ButtonProps) => ({
  backgroundColor: props.backgroundColor || colors.primary,
  color: props.color || colors.white,
  width: props.width || '100%',
}))`
  height: 100%;
  border: none;
  border-radius: 20px;
  width: ${props => props.width ? props.width : '100%'};
  color: ${props => props.color ? props.color : `${colors.white}`};
  background: ${props => props.backgroundColor ? props.backgroundColor : `${colors.primary}`};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
    cursor: pointer;
  }
`; 

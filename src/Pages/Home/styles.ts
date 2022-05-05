import styled from 'styled-components';
import { colors, sizes } from '../../Themes/theme';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
`;

export const LogoContainer = styled.div`
  margin: -20px 0px 10px 0px;
`;
export const LogoImage = styled.img``;

export const Content = styled.main`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${colors.black};
  border-radius: 20px;
  background: ${colors.background};
  `;
export const Title = styled.h1`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${sizes.title};
  `;
export const SubTitle = styled.span`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${sizes.subtitle};
  text-align: center;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.span`
  font-size: ${sizes.subtitle};
`;
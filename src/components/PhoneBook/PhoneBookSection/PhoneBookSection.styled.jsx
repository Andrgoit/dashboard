import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  display: inline;
  border-bottom: 2px solid red;
`;
export const StyledSection = styled.section`
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 10px;
`;
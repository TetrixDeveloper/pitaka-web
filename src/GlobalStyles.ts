import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');

  :root {
    font-family: Satoshi, Inter, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: ${({ theme }) => theme.body};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  justify-content: center;
  max-width: 150px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1000px;
  }
`;

export const DownloadButton = styled.a`
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: var(--Main-System-10px, 10px);
  border-radius: 30px;
  background: var(--Color-secondary-button-background-inactive, #edeef1);
  text-decoration: none;
  width: 100%;

  &:hover {
    background: var(--Color-secondary-button-background-hover, #d4d5d8);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const DownloadButtonText = styled.span`
  color: var(--Color-text-primary, #25272c);
  text-align: center;

  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
`;

export const IconButton = styled.button`
  padding: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export default GlobalStyles;

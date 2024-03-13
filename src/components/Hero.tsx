import styled from "styled-components";

import HeroBG from "./assets/images/HeroBG.png";
import { DownloadButtonData } from "./constants";
import { ButtonContainer, DownloadButton, DownloadButtonText } from "../GlobalStyles";

const HeroContainer = styled.div`
  background-image: url(${HeroBG});
  background-color: var(--Color-surface-primary, #1d1e20);
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 70px;
`;

const Title = styled.h1`
  color: var(--Color-main-button-text, #f7f8f8);
  text-align: center;
  font-family: Satoshi;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 85.68px */
  letter-spacing: -2.16px;
  text-align: center;
  max-width: 599px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 773px;
`;

const Subtitle = styled.p`
  color: var(--Color-main-button-text, #f7f8f8);
  text-align: center;
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
`;

const DownloadTitle = styled.p`
  color: var(--Color-main-button-text, #f7f8f8);
  font-family: Satoshi;
  font-size: 29px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.58px;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>The wallet app that works for you.</Title>
      <TextContainer>
        <Subtitle>
          Pitaka allows you to safely and easily manage and transact with your
          funds, giving you peace of mind and financial freedom.
        </Subtitle>
        <DownloadTitle>Download the app it’s free!</DownloadTitle>
      </TextContainer>
      <ButtonContainer>
        {DownloadButtonData.map((button) => (
          <DownloadButton
            key={button.text}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={button.icon} alt={button.text} />
            <DownloadButtonText>{button.text}</DownloadButtonText>
          </DownloadButton>
        ))}
      </ButtonContainer>
    </HeroContainer>
  );
};

export default Hero;

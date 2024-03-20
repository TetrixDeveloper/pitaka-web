import styled from "styled-components";

import { FeesIcon, CedefiIcon, EaseIcon, SecureIcon } from "./assets/icons";

const WhyPitakaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.h1`
  margin: 0;
  color: var(--Color-Icons-surface, #613cb0);
  font-family: Satoshi-Variable;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: Satoshi-Variable;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  padding: 0 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const IconTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  color: var(--Color-Icons-surface, #613cb0);
  font-family: Satoshi-Variable;
  font-size: 18px;
  font-weight: 700;
`;

const IconSubtitle = styled.p`
  margin: 0;
  color: var(--Color-text-secondary, #6b7280);
  font-family: Satoshi-Variable;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

const IconData = [
  {
    icon: FeesIcon,
    title: "Competitive Fees",
    subtitle: "0.35% compared to Philippines’ industry rate of 2.5-5%.",
  },
  {
    icon: CedefiIcon,
    title: "First CeDeFi Platform",
    subtitle: "Seamless integration of Centralized and Decentralized Finance.",
  },
  {
    icon: EaseIcon,
    title: "Ease of Use",
    subtitle: "Send & Receive Fiat and Crypto in a single platform.",
  },
  {
    icon: SecureIcon,
    title: "Reliable & Secure",
    subtitle: "Feel confident with our secure transaction system.",
  },
];

const WhyPitaka = () => {
  return (
    <WhyPitakaContainer>
      <TitleContainer>
        <Title>Why choose Pitaka</Title>
        <Subtitle>Easy, Simple, Secured</Subtitle>
      </TitleContainer>
      <IconContainer>
        {IconData.map((data, index) => (
          <IconWrapper key={index}>
            <Icon src={data.icon} alt={data.title} />
            <IconTitle>{data.title}</IconTitle>
            <IconSubtitle>{data.subtitle}</IconSubtitle>
          </IconWrapper>
        ))}
      </IconContainer>
    </WhyPitakaContainer>
  );
};

export default WhyPitaka;

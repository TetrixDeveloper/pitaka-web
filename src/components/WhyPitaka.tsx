import styled from "styled-components";

import { FeesIcon, CedefiIcon, EaseIcon, SecureIcon } from "./assets/icons";

const WhyPitakaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  gap: 44px;
`;

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  gap: 52px
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
  gap: 42px;
  margin-top: 60px;
  padding: 0 10px;
  max-width: 1305px;
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

const OurValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 31px 49px 31px 49px;
  background-color: var(--Color-main-button-background, #613CB0);
  border-radius: 16px;
  gap: 10px;
  max-width: 1310px;
`;

const OurValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const OurValuesTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  color: var(--Color-main-button-text, #F7F8F8);
  font-family: Satoshi-Variable;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const OurValuesSubtitle = styled.p`
  color: var(--Color-main-button-text, #F7F8F8);
  font-family: Satoshi-Variable;
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;


const WhyPitaka = () => {
  return (
    <WhyPitakaContainer>
      <BenefitContainer>
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
      </BenefitContainer>
      <OurValuesContainer>
        <OurValuesWrapper>
          <OurValuesTitle>Our Values</OurValuesTitle>
          <OurValuesSubtitle>We are committed to delivering exceptional service, catering to the diverse needs of both large organizations and individuals. With inclusivity and innovation as our foundation, our goal is to lead as a top digital financial service provider, guaranteeing the utmost security and transparency in our e-wallet offerings.</OurValuesSubtitle>
        </OurValuesWrapper>
      </OurValuesContainer>
    </WhyPitakaContainer>
  );
};

export default WhyPitaka;

import styled from "styled-components";
import { PromosImage } from "@/assets/icons";
import { DownloadButtonData } from "@/components/constants";

const PromosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 50px 0;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 60px;
  color: ${({ theme }) => theme.text};
  text-align: left;
  margin-left: 20px;
`;

const PromoCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 31px 49px 31px 49px;
  overflow: hidden;
  background: var(--Color-Light-Purple-light-purple-200, #c3bff9);
  text-align: left;
  border-radius: 16px;
  gap: 10px;
  max-width: 1310px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const PromoTitle = styled.h3`
  color: var(--Color-Icons-surface, #613cb0);
  font-family: Satoshi-Variable;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
  letter-spacing: -1.2px;
`;

const PromoSubtitle = styled.p`
  color: var(--Color-main-button-background, #613cb0);
  font-family: Satoshi-Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 37px; /* 123.333% */
  letter-spacing: -0.6px;
  max-width: 900px;
`;

const Disclaimer = styled.p`
  font-style: italic;
  font-size: 12px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 20px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px 20px;
  border-radius: 30px;
  background: var(--Color-secondary-button-background-inactive, #edeef1);
  text-decoration: none;

  &:hover {
    background: var(--Color-secondary-button-background-hover, #d4d5d8);
  }

  @media (min-width: 768px) {
    margin: 0 10px;
    width: auto;
  }
`;

const DownloadButtonText = styled.span`
  color: var(--Color-text-primary, #25272c);
  text-align: center;

  font-family: Satoshi-Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  margin-left: 10px;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PromoImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 100%;
    height: 100%;
  }
`;

const Promos = () => {
  return (
    <PromosContainer>
      <Title>More to Explore</Title>
      <PromoCard>
        <LeftContent>
          <PromoTitle>Invite your friends. Earn up to ₱100</PromoTitle>
          <PromoSubtitle>
            Earn ₱50 for each friend who registers from your QR code and
            deposits a minimum of ₱500 in their Pitaka Wallet within 15 days of
            the invite.
          </PromoSubtitle>
          <Disclaimer>
            DISCLAIMER: The terms and conditions of this promo are subject to
            change without prior notice.
          </Disclaimer>
          <ButtonContainer>
            {DownloadButtonData.map((button, index) => (
              <DownloadButton key={index} href={button.url}>
                <img src={button.icon} alt={button.text} />
                <DownloadButtonText>{button.text}</DownloadButtonText>
              </DownloadButton>
            ))}
          </ButtonContainer>
        </LeftContent>
        <RightContent>
          <PromoImage src={PromosImage} alt="Promo Image" />
        </RightContent>
      </PromoCard>
    </PromosContainer>
  );
};

export default Promos;

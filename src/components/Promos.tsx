import styled from "styled-components";
import { PromosImage } from "./assets/icons";
import { DownloadButtonData } from "./constants";

const PromosContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const PromoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  background: var(--Color-Light-Purple-light-purple-200, #c3bff9);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const PromoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PromoSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 30px;
  background-color: #613cb0;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #4d2f8a;
  }

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

const DownloadButtonText = styled.span`
  font-weight: bold;
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
`;

const Promos = () => {
  return (
    <PromosContainer>
      <Title>More to Explore</Title>
      <PromoCard>
        <LeftContent>
          <PromoTitle>Invite your friends. Earn up to ₱100</PromoTitle>
          <PromoSubtitle>
            Earn ₱50 for each friend who registers from your QR code and deposits
            a minimum of ₱500 in their Pitaka Wallet within 15 days of the
            invite.
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

import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (min-width: 768px) {
    padding: 100px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 390px;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Main-System-10px, 10px);
    max-width: 390px;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: var(--Color-Icons-surface, #613cb0);
  font-family: Satoshi-Variable;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;

  @media (min-width: 768px) {
    margin: 0;
    color: var(--Color-Icons-surface, #613cb0);
    font-family: Satoshi-Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    letter-spacing: -0.4px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: Satoshi-Variable;
  font-size: 40px;
  font-weight: 700;
  line-height: 112%;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    color: ${({ theme }) => theme.text};
    font-family: Satoshi-Variable;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%; /* 44.8px */
    letter-spacing: -1.2px;
  }
`;

const Schedule = styled.p`
  margin: 0;
  color: var(--Color-text-secondary, #6b7280);
  font-family: Satoshi-Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
`;

const CTAButton = styled.button`
  margin: 20px 10px 0 0;
  padding: 12px 24px;
  border-radius: 70px;
  background: var(--Color-main-button-background, #613cb0);
  border: none;
  cursor: pointer;
  display: flex;
  transition: background 0.3s ease;
  color: var(--Color-main-button-text, #f7f8f8);
  font-family: Satoshi-Variable;

  &:hover {
    background: var(--Color-main-button-background-hover, #4d2f8a);
  }
`;

const RightContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--Main-System-10px, 10px);
  max-width: 800px;
`;

const Column = styled.div`
  flex: 1;
`;

const ColumnTitle = styled.h3`
  color: #613cb0;
  font-size: 16px;
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

const BottomContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid #e5e5e5;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex: 1;
  }
`;

const CopyRightText = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: justify;
  font-family: Satoshi-Variable;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 500px;
`;

const LegalLink = styled.a`
  font-family: Satoshi-Variable;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const DividerVertical = styled(Divider)`
  height: 1.2em;
  margin: 0 10px;
`;

const BottomRight = styled.div``;

const SocialIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialMediaLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;

const SocialMediaIconsFilled = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkText = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaLinksData = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com",
  },
  {
    icon: <Twitter />,
    link: "https://www.twitter.com",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com",
  },
];

const ProductLinks = [
  {
    title: "Work with Us",
    link: "#",
  },
  {
    title: "Tetrix Link",
    link: "#",
  },
  {
    title: "User Guides",
    link: "#",
  },
  {
    title: "About Pitaka",
    link: "#",
  },
];

const CompanyLinks = [
  {
    title: "Our Values",
    link: "#",
  },
  {
    title: "Our Commitment",
    link: "#",
  },
  {
    title: "Our Team",
    link: "#",
  },
];

const SupportLinks = [
  {
    title: "Report a bug",
    link: "#",
  },
  {
    title: "FAQs",
    link: "#",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LeftContent>
          <Title>Have Questions?</Title>
          <Subtitle>We have 24/7 Support available</Subtitle>
          <Schedule>from Mondays - Sunday</Schedule>
          <CTAButton>Talk to the team</CTAButton>
        </LeftContent>
        <RightContent>
          <Column>
            <ColumnTitle>Product</ColumnTitle>
            <LinkContainer>
              {ProductLinks.map((link, index) => (
                <LinkText key={index} href={link.link}>
                  {link.title}
                </LinkText>
              ))}
            </LinkContainer>
          </Column>
          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkContainer>
              {CompanyLinks.map((link, index) => (
                <LinkText key={index} href={link.link}>
                  {link.title}
                </LinkText>
              ))}
            </LinkContainer>
          </Column>
          <Column>
            <ColumnTitle>Support</ColumnTitle>
            <LinkContainer>
              {SupportLinks.map((link, index) => (
                <LinkText key={index} href={link.link}>
                  {link.title}
                </LinkText>
              ))}
            </LinkContainer>
          </Column>
        </RightContent>
      </ContentWrapper>
      <BottomContentWrapper>
        <BottomLeft>
          <CopyRightText>©2024 Pitaka. All rights reserved.</CopyRightText>
        </BottomLeft>
        <LegalLinks>
          <LegalLink href="#">Terms of Service</LegalLink>
          <DividerVertical orientation="vertical" flexItem />
          <LegalLink href="#">Privacy Policy</LegalLink>
          <DividerVertical orientation="vertical" flexItem />
          <LegalLink href="#">Cookie Policy</LegalLink>
          <DividerVertical orientation="vertical" flexItem />
        </LegalLinks>
        <BottomRight>
          <SocialIconContainer>
            {SocialMediaLinksData.map((data, index) => (
              <SocialMediaLinks key={index} href={data.link}>
                <SocialMediaIconsFilled>{data.icon}</SocialMediaIconsFilled>
              </SocialMediaLinks>
            ))}
          </SocialIconContainer>
        </BottomRight>
      </BottomContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

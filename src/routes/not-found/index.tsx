import styled from 'styled-components';
import { EdLogo } from '@/assets/images';

const PageContainer = styled.div`
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
  align-items: center;
  gap: 128.711px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: "Satoshi-Variable";
  font-size: 42.2px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 47.265px */
  letter-spacing: -1.266px;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-family: "Satoshi-Variable";
  font-size: 21.1px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.793px; /* 117.5% */
  letter-spacing: -0.422px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39.035px;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Main-System-10px, 10px);
    max-width: 390px;
  }
`;


const RightContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--Main-System-10px, 10px);
`;


const HomeButton = styled.a`
  text-decoration: none;
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

const NotFound = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <LeftContent>
          <Title>Page Not Found</Title>
          <Subtitle>The page you are looking for was moved, removed, renamed or might never have existed. If you're still lost try using our search in the top menu or return to the homepage.</Subtitle>
          <HomeButton href='/'>Take me home</HomeButton>
        </LeftContent>
        <RightContent>
          <Image src={EdLogo} alt="Dog with sign" />
        </RightContent>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NotFound;

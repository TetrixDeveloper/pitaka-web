import styled from "styled-components";
import BreadcrumbNav from "../../components/BreadCrumb";
import {
  LoginScreen,
  AccountCreation,
  Home,
  OverTheCounter,
  SelectPartnerBank,
  Remittance,
  ReviewAndTransfer,
  ConfirmationScreen,
  ConfirmationComplete,
  Send,
  SyncContacts,
  OneTimePassword,
  ConfirmSendMoney,
  SendMoney,
  CompleteSendMoney,
} from "@/assets/images";
import Stepper from "./components/Stepper";

const UserGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
`;

const InnerFrame = styled.div`
  display: flex;
  padding: var(--Spacing-System-spacing--xl, 24px) 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

const HowToContainer = styled.div`
  width: 721px;
  height: 30px;
  flex-shrink: 0;

  @media (max-width:768px) {
    max-width: 320px;
  }
`

const HowToTitle = styled.h1`
  color: var(--Color-Icons-surface, #613CB0);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
`

const AddMoneyContainer = styled.div`
  display: flex;
  width: 720px;
  height: 60px;

  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width:768px) {
    max-width: 320px;
  }
`

const AddMoneyTitle = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
  letter-spacing: -1.2px;

  @media (max-width:768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    font-family: Satoshi-Variable;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%; /* 44.8px */
    letter-spacing: -1.2px;
  }
`

const SubtitleContainer = styled.div`
  width: 557px;

  @media (max-width:768px) {
    max-width: 320px;
  }
`

const SubtitleText = styled.div`
  color: var(--Color-text-secondary, #6B7280);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
`

const InstructionContainer = styled.div`
  display: flex;
  width: 1237px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px 41px;
  flex-wrap: wrap;

  @media (max-width:768px) {
    display: none;
  }
`

const InstructionMobile = styled.div`
  display: block;
  max-width: 390px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width:768px) {
    display: none;
  }
`

const CashinContainer = styled.div`
  width: 550px;
  flex-shrink: 0;

  @media (max-width:768px) {
    width: auto;
  }
`

const CashinText = styled.h3`
  color: var(--Color-Icons-surface, #613CB0);
  text-align: center;
  font-size: 30.667px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 46px */
  letter-spacing: -0.613px;
`

const CardContainer = styled.div`
  width: 550px;
  height: 1628px;
  flex-shrink: 0;

  border-radius: 12.875px;
  background: ${({ theme }) => theme.card};

  /* Shadow */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);

  @media (max-width:768px) {
    max-width: 320px;
    height: auto;
  }
`

const CashInSteps = [
  {
    title: "Create account for first time users.",
    images: [LoginScreen, AccountCreation]
  },
  {
    title: "Tap ‘Cash in’ on the home screen.",
    images: [Home]
  },
  {
    title: "Easily add money using your favorite banks or e-wallets.",
    images: [OverTheCounter, SelectPartnerBank, Remittance]
  },
  {
    title: "Enter your desired amount and done!",
    images: [ReviewAndTransfer, ConfirmationScreen, ConfirmationComplete]
  },
];

const SendFundSteps = [
  {
    title: "Tap ‘Send’ on the home screen.",
    images: [Home, Send]
  },
  {
    title: "Choose the receiver from the contacts",
    images: [SyncContacts, OneTimePassword]
  },
  {
    title: "Enter your desired amount and done!",
    images: [SendMoney ,ConfirmSendMoney, CompleteSendMoney]
  },
]

const UserGuide = () => {
  return (
    <UserGuideContainer>
      <InnerFrame>
        <BreadcrumbNav
          items={[
            { link: '/', label: '' },
            { link: '/faqs', label: 'User Guide' },
            { link: '/faqs', label: 'How to Add Money and Send Cash with Pitaka', isActive: true },
          ]}
        />
        <HowToContainer>
          <HowToTitle>How to</HowToTitle>
        </HowToContainer>
        <AddMoneyContainer>
          <AddMoneyTitle>Add Money and Send Cash with Pitaka</AddMoneyTitle>
        </AddMoneyContainer>
        <SubtitleContainer>
          <SubtitleText>
            In just a few easy steps, you are all set to manage your finances all in one place.
          </SubtitleText>
        </SubtitleContainer>
        <InstructionContainer>
          <CashinContainer>
            <CashinText>
              To Cash in
            </CashinText>
          </CashinContainer>
          <CashinContainer>
            <CashinText>
              To Send Funds
            </CashinText>
          </CashinContainer>
          <CardContainer>
            {CashInSteps.map((data, index) => (
               <Stepper
                count={index + 1}
                title={data.title}
                images={data.images}
                key={index}
              />
            ))}
          </CardContainer>
          <CardContainer>
            {SendFundSteps.map((data, index) => (
               <Stepper
                count={index + 1}
                title={data.title}
                images={data.images}
                key={index}
              />
            ))}
          </CardContainer>
        </InstructionContainer>
        <InstructionMobile>
          <CashinContainer>
            <CashinText>
              To Cash in
            </CashinText>
          </CashinContainer>
          <CardContainer>
            {CashInSteps.map((data, index) => (
               <Stepper
                count={index + 1}
                title={data.title}
                images={data.images}
                key={index}
              />
            ))}
          </CardContainer>
          <CashinContainer>
            <CashinText>
              To Send Funds
            </CashinText>
          </CashinContainer>
          <CardContainer>
            {SendFundSteps.map((data, index) => (
               <Stepper
                count={index + 1}
                title={data.title}
                images={data.images}
                key={index}
              />
            ))}
          </CardContainer>
        </InstructionMobile>
      </InnerFrame>
    </UserGuideContainer>
  );
};

export default UserGuide;

import styled from "styled-components";
import BreadcrumbNav from "../../components/BreadCrumb";
import Accordion from "./components/Accordion";

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
  scroll-behavior: smooth;
`;

const InnerFrame = styled.div`
  display: flex;
  padding: var(--Spacing-System-spacing--xl, 24px) 0px;
  flex-direction: column;
`

const questionsAndAnswers = [
  { question: "How do I set up my account on Pitaka?", answer: "To set up an account, simply download the app from the App Store or Google Play Store for FREE to create an account, you'll need to provide basic information such as your name, email address, and create a secure MPIN." },
  { question: "How do I add money to my Pitaka app?", answer: "You can add money to your Pitaka using various methods, including bank transfers, debit or credit card payments, or by receiving funds from other users. Tap 'Receive' button on the homepage, or request to generate your QR code for senders to scan." },
  { question: "Is there a fee for transferring money between users or to bank accounts?", answer: "Peer-to-peer transfers between Pitaka users within the app are free. For other transactions such as bank transfers we strive to keep our fees for as low as 0.35% compared to Philippines’ industry rate of 2.5-5%" },
  { question: "How do I send money to friends or family using Pitaka?", answer: "Sending money to friends or family is simple and convenient. Just select the 'Send Money' option within the app, enter the recipient's information or select them from your contacts, specify the amount, and confirm the transaction. The recipient will receive the funds instantly." },
  { question: "What should I do if I forget my MPIN?", answer: `If you forget your PIN or password, you can easily reset it using the "Forgot PIN" or "Forgot Password" feature within the app. Follow the prompts to verify your identity and set a new PIN or password.` },
  { question: "Is customer support available if I encounter any issues or have questions about the app?", answer: "Absolutely! Our dedicated customer support team is available to assist you with any questions or issues you may have regarding the app. You can reach out to us through the app's support portal or email us at info@viridiantech.io for prompt assistance." },
];

const Faqs = () => {
  return (
    <FaqContainer id="faqs">
      <InnerFrame>
        <BreadcrumbNav
          items={[
            { link: '/', label: '' },
            { link: '/faqs', label: 'FAQs' },
            { link: '/faqs', label: 'Frequently Asked Questions', isActive: true },
          ]}
        />
        {questionsAndAnswers.map((qa, index) => (
          <Accordion key={index} question={qa.question} answer={qa.answer} />
        ))}
      </InnerFrame>
      
        
      
    </FaqContainer>
  );
};

export default Faqs;

import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 38px;
  margin-bottom: 10px;
`;

const Question = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  /* Header / Header 2 */
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.97px; /* 107.036% */
  letter-spacing: -0.56px;
`;

const Answer = styled.div`
  padding-top: 10px;
  color: var(--Color-text-secondary, #6B7280);

  /* Regular/Type@20 */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
`;

interface AccordionProps {
    question: string;
    answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
          <Question onClick={() => setIsOpen(!isOpen)}>
            {question} {isOpen ? '-' : '+'}
          </Question>
          {isOpen && <Answer>{answer}</Answer>}
        </Wrapper>
    );
};

export default Accordion;

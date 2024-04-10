import styled from "styled-components";

const CardWrapper = styled.div`
  display: block;
  padding-top: 1px;
`;

const CardInner = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 57px;
  margin-left: 15%;

  @media (max-width:768px) {
    align-items:center;
    margin-top: 40px;
    margin-left: 8%;
  }  
`
const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Color-main-button-text, #F7F8F8);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;
  z-index: 2;

  @media (max-width:768px) {
    width: 46px;
    height: 38px;
    border-radius: 34px;
  }
`;

const DottedLine = styled.div`
  border-left: 4px dashed var(--Color-Icons-surface, #613CB0); 
  height: 50%;
  position: absolute;
  margin-left: 112px;

  @media (max-width:768px) {
    display: none;
  }
`;

const Label = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
  text-align: left;
  max-width: 340px;
  justify-content: center;
  align-items: center;

  @media (max-width:768px) {
    font-size: 15px;
    max-width: 210px;
  }
`

const Image = styled.img`
  max-width: calc(33% - 10px);
  height: 100%;
      
  @media (max-width:768px) {
    max-width:100%;
    margin-bottom :10px; 
  }
`;

const ImageContainer =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding-left: 30%;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-left: 25%;
  }
`

interface StepperProps {
  count: number;
  title: string;
  images: string[];
}

const Stepper: React.FC<StepperProps> = (props) => {
  const { count, title, images } = props;

  return (
    <CardWrapper>
      <CardInner>
        <Circle>{count}</Circle>
        <Label>{title}</Label>
      </CardInner>
      <DottedLine />
      <ImageContainer>
        {images.map((source, index) => (
          <Image src={source} alt={`image-${index}`} key={index}/>
        ))}
      </ImageContainer>
    </CardWrapper>
  )
}

export default Stepper;
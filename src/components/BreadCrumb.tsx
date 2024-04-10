import styled from 'styled-components';

const Breadcrumb = styled.div`
  display: flex;
  width: 1235px;
  align-items: flex-start;
  gap: 4px;

  @media (max-width:768px) {
    max-width: 320px;
    display: block;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const Separator = styled.svg`
  width: 20px;
  height: 20px;
  & path {
    fill: ${({ theme }) => theme.text};
  }
  viewBox: 0 0 20 16;
`;

const ActiveLink = styled(Link)`
  color: purple;
`;

const HomeImage = styled.svg`
  & path {
    fill: ${({ theme }) => theme.text};
  }
`;

interface BreadcrumbItemProps {
  link: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { link, children, isActive } = props;
  const Component = isActive ? ActiveLink : Link;
  return <Component href={link}>{children}</Component>;
};

const BreadcrumbNav = () => (
  <Breadcrumb>
    <BreadcrumbItem link="/">
      <HomeImage width="15" height="14" viewBox="0 0 15 14">
        <g id="Icon / HomeOutlined">
        <path id="Vector" d="M13.4407 6.90531L8.15787 1.62523L7.80377 1.27113C7.72309 1.19098 7.61398 1.146 7.50025 1.146C7.38653 1.146 7.27742 1.19098 7.19674 1.27113L1.55982 6.90531C1.47715 6.98766 1.41181 7.08574 1.36767 7.19375C1.32352 7.30177 1.30146 7.41753 1.30279 7.53421C1.30826 8.01546 1.70885 8.39964 2.1901 8.39964H2.77115V12.8526H12.2294V8.39964H12.8227C13.0565 8.39964 13.2766 8.30804 13.442 8.14261C13.5235 8.06142 13.588 7.96487 13.6319 7.85856C13.6758 7.75225 13.6982 7.63829 13.6977 7.52328C13.6977 7.29085 13.6061 7.07074 13.4407 6.90531ZM8.26588 11.8682H6.73463V9.07914H8.26588V11.8682ZM11.245 7.41527V11.8682H9.14088V8.75101C9.14088 8.44886 8.89615 8.20414 8.594 8.20414H6.4065C6.10435 8.20414 5.85963 8.44886 5.85963 8.75101V11.8682H3.75553V7.41527H2.44303L7.50162 2.36078L7.81744 2.6766L12.5588 7.41527H11.245Z" fill="#25272C"/>
        </g>
      </HomeImage>
    </BreadcrumbItem>
    <Separator viewBox="0 0 20 16">
      <path d="M8.58711 5L7.41211 6.175L11.2288 10L7.41211 13.825L8.58711 15L13.5871 10L8.58711 5Z" />
    </Separator>
    <BreadcrumbItem link="/guides">User Guide</BreadcrumbItem>
    <Separator viewBox="0 0 20 16">
      <path d="M8.58711 5L7.41211 6.175L11.2288 10L7.41211 13.825L8.58711 15L13.5871 10L8.58711 5Z" />
    </Separator>
    <BreadcrumbItem link="/guides" isActive>
      How to Add Money and Send Cash with Pitaka
    </BreadcrumbItem>
  </Breadcrumb>
);

export default BreadcrumbNav;

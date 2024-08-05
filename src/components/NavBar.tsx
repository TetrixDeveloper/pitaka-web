import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { PitakaLogo, PitakaDark } from "../assets";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton, IconContainer } from "../GlobalStyles";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.body};
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  @media screen and (min-width: 768px) {
    padding: 10px 40px;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 146.343px;
  height: 50.639px;
`;

const NavLinkContainer = styled.div<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 767px) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const NavLink = styled.a`
  margin: 0 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-family: Satoshi-Variable;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  &.active {
    color: #613cb0;
  }

  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 70px;
  background: var(--Color-main-button-background, #613cb0);
  border: none;
  cursor: pointer;
  display: none;
  transition: background 0.3s ease;

  &:hover {
    background: var(--Color-main-button-background-hover, #4d2f8a);
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ButtonText = styled.span`
  color: var(--Color-main-button-text, #f7f8f8);
  font-family: Satoshi-Variable;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

type NavBarProps = {
  toggleTheme: () => void;
  currentTheme: string;
};

const NavBar = (props: NavBarProps) => {
  const { toggleTheme, currentTheme } = props;
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const logoSrc = currentTheme === "light" ? PitakaLogo : PitakaDark;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string, offset: number = 50) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.scrollMarginTop = `${offset}px`;
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const NavLinkData = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About Us",
      link: "/#about",
    },
    {
      title: "User Guide",
      link: "/#guides",
    },
    {
      title: "FAQs",
      link: "/#faqs",
    },
    {
      title: "Link",
      link: "https://link.tetrix.xyz",
    },
  ];

  if (isMobile) {
    NavLinkData.push({
      title: "Support",
      link: "https://docs.pitaka.io",
    });
  }

  return (
    <Container>
      <Nav>
        <Logo src={logoSrc} alt="Pitaka logo" />
        <NavLinkContainer menuOpen={menuOpen}>
          {NavLinkData.map((link) => (
            <NavLink
              key={link.title}
              href={link.link}
              className={pathname === link.link ? "active" : ""}
              onClick={() => {
                if (link.link.startsWith("/#")) {
                  scrollToSection(link.link.substring(1));
                } else {
                  window.open(link.link, "_blank");
                }
                setMenuOpen(false);
              }}
            >
              {link.title}
            </NavLink>
          ))}
        </NavLinkContainer>
        <Button>
          <StyledLink href="https://docs.pitaka.io">
            <ButtonText>Support</ButtonText>
          </StyledLink>
        </Button>
        <IconContainer>
          {isMobile && (
            <IconButton onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          )}
          <IconButton onClick={toggleTheme}>
            <Brightness4Icon />
          </IconButton>
        </IconContainer>
      </Nav>
    </Container>
  );
};

export default NavBar;

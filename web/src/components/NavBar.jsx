import {
  Navbar, Nav, Container, NavDropdown,
} from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';
import LangToggle from './LangToggle';
import { useLocale, localizePath } from '../i18n/LocaleContext';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const { lang } = useLocale();
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(localizePath(endpoints.navbar, lang), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, [lang]);

  return (
    <Navbar
      fixed="top"
      expand="md"
      variant={theme.bsPrimaryVariant}
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand href="/">
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data
              && data.sections?.map((section, index) => {
                // A dropdown groups several downloads (e.g. the CV variants)
                // under one navbar entry; each item opens in a new tab.
                if (section?.type === 'dropdown') {
                  return (
                    <NavDropdown
                      key={section.title}
                      id={`navbar-dropdown-${index}`}
                      title={section.title}
                      align="end"
                      className="navbar__dropdown"
                    >
                      {section.items?.map((item) => (
                        <NavDropdown.Item
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setExpanded(false)}
                        >
                          {item.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }
                if (section?.type === 'link') {
                  return (
                    <ExternalNavLink
                      key={section.title}
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setExpanded(false)}
                      className="navbar__link"
                      theme={theme}
                    >
                      {section.title}
                    </ExternalNavLink>
                  );
                }
                return (
                  <InternalNavLink
                    key={section.title}
                    onClick={() => setExpanded(false)}
                    end={index === 0}
                    className="navbar__link"
                    to={section.href}
                    theme={theme}
                  >
                    {section.title}
                  </InternalNavLink>
                );
              })}
          </Nav>
          <LangToggle />
          <ThemeToggler
            onClick={() => setExpanded(false)}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/logo-github-modified.png';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from '../styles/components/FooterStyles';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://github.com">
              <img
                src={github}
                alt="logo github"
                style={{
                  width: '30px',
                  height: '30px',
                }}
              />
            </FooterLink>
            <FooterLink href="https://linkedin.com">
              <img
                src={linkedin}
                alt="logo linkedin"
                style={{
                  width: '30px',
                  height: '30px',
                  marginTop: '13px',
                }}
              />
            </FooterLink>
          </Column>
          <Column>
            <Heading>Hurkan Kalan</Heading>
            <FooterLink
              href="https://github.com/hurkankalan"
              target="_blank"
              rel="noopener"
            >
              Github
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/hurkan-kalan/"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </FooterLink>
          </Column>
          <Column>
            <Heading>Alexis Buchert</Heading>
            <FooterLink
              href="https://github.com/Alexis-Buchert"
              target="_blank"
              rel="noopener"
            >
              Github
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/alexis-buchert-368835221/"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </FooterLink>
          </Column>
          <Column>
            <Heading>Rafael Dubois</Heading>
            <FooterLink
              href="https://github.com/RafaelDubois"
              target="_blank"
              rel="noopener"
            >
              Github
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/rafael-dubois-21925b220/"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </FooterLink>
          </Column>
          <Column>
            <Heading>Fabrice Sérapion</Heading>
            <FooterLink
              href="https://github.com/FabriceSerapion"
              target="_blank"
              rel="noopener"
            >
              Github
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/fabrice-s%C3%A9rapion/"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

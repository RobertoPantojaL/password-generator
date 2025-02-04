import styled from "@emotion/styled"
import { colors } from "./styles"

const FooterContainer = styled.footer`
  background-color: ${colors.color1};
  color: white;
  padding: 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
    color: ${colors.color4};
        align-self: center;

`

const FooterLink = styled.a`
  color: ${colors.color4};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.color5};
  }
`


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
    <FooterText>© {currentYear} Password Generator. Todos los derechos reservados.</FooterText>
    
    <div>
      <FooterLink href="/legal.html" target="_blank" rel="noopener noreferrer"> Términos y Condiciones</FooterLink>
    </div>
</FooterContainer>

  )
}

export default Footer


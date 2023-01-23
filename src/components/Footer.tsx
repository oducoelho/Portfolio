import {  GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"
import { FooterContainer } from "../styles/pages/Footer"

export const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright © Eduardo Coelho · 2023</span>
      <div>
        <ul>
          <li><a href="https://github.com/oducoelho" target={"_blank"}><GithubLogo size={25} color={'#656D72'} /></a></li>
          <li><a href="https://instagram.com/oducoelho" target={"_blank"}><InstagramLogo size={25} color={'#656D72'} /></a></li>
          <li><a href="https://www.linkedin.com/in/eduardo-coelho-568226207/" target={"_blank"}><LinkedinLogo size={25} color={'#656D72'} /></a></li>
          <li><TwitterLogo size={25} /></li>
        </ul>
      </div>
    </FooterContainer>
  )
}

import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"
import { Content, Download, HomeContainer, Name, Picture } from "../styles/pages/Home"

import HeroImage from '../assets/svgs/AvatarAndIcons.svg'

export const Home = () => {
  return (
    <HomeContainer name="home">
      <Content>
        <Name>
        <h1>Eduardo Coelho</h1>
          <p>Front-end developer</p>
          <ul>
            <li><a href="https://github.com/oducoelho" target={"_blank"}><GithubLogo size={25}  color={'#656D72'} /></a></li>                                                     
            <li><a href="https://instagram.com/oducoelho" target={"_blank"}><InstagramLogo size={25} color={'#656D72'} /></a></li>
            <li><a href="https://www.linkedin.com/in/eduardo-coelho-568226207/" target={"_blank"}><LinkedinLogo size={25} color={'#656D72'} /></a></li>
            <li><TwitterLogo size={25} /></li>
          </ul>
        </Name>
        

        <Picture>
          <img src={HeroImage} alt="" />
        </Picture>
        

        <Download>
          <span>
            <a href="../../archive/Curriculum-Eduardo.pdf" download>Download CV <ArrowDown /></a>  
          </span>
        </Download>
      </Content>
    </HomeContainer>
  )
}
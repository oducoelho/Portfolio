import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"
import { Content, Download, HomeContainer, Name, Picture } from "../styles/pages/Home"

import HeroImage from '../assets/svgs/AvatarAndIcons.svg'

export const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <Name>
        <h1>Eduardo Coelho</h1>
          <p>Front-end developer</p>
          <ul>
            <li><GithubLogo size={25} /></li>
            <li><InstagramLogo size={25} /></li>
            <li><LinkedinLogo size={25} /></li>
            <li><TwitterLogo size={25} /></li>
          </ul>
        </Name>
        

        <Picture>
          <img src={HeroImage} alt="" />
        </Picture>
        

        <Download>
          <span>Download CV <ArrowDown /></span>
          <button><WhatsappLogo size={30} /> Lets talk</button>
        </Download>
      </Content>
    </HomeContainer>
  )
}

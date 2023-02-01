import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"
import { Content, Download, HomeContainer, Name, Picture } from "../styles/pages/Home"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

import HeroImage from '../assets/svgs/AvatarAndIcons.svg'

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <HomeContainer id="home">
      <Content>
        <Name data-aos="zoom-in">
        <h1>Eduardo Coelho</h1>
          <p>Front-end developer</p>
          <ul>
          <li><a href="https://github.com/oducoelho" target={"_blank"}><GithubLogo size={25} color={'#354985'} /></a></li>
          <li><a href="https://instagram.com/oducoelho" target={"_blank"}><InstagramLogo size={25} color={'#354985'} /></a></li>
          <li><a href="https://www.linkedin.com/in/eduardo-coelho-568226207/" target={"_blank"}><LinkedinLogo size={25} color={'#354985'} /></a></li>
          <li><a href="https://twitter.com/oducoelho" target={"_blank"}><TwitterLogo size={25} color={'#354985'} /></a></li>
          </ul>
        </Name>
        

        <Picture>
          <img src={HeroImage} alt="" data-aos="zoom-in" />
        </Picture>
        

        <Download>
          <span data-aos="zoom-in">
            <a href="../../archive/Curriculum-Eduardo.pdf" download>Download CV <ArrowDown /></a>  
          </span>
        </Download>
      </Content>
    </HomeContainer>
  )
}
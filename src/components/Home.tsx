import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"
import { Content, HomeContainer, Picture } from "../styles/pages/Home"

import HeroImage from '../assets/svgs/Hero-Image.svg'

export const Home = () => {
  return (
    <HomeContainer  >
      <Content>
        <span>—MY NAME IS</span>

        <h1>Eduardo <strong>Coelho.</strong></h1>

        <p>Studying Systems Analysis and Development. I'm looking for my first opportunity as a developer. I consider myself a dedicated person who seeks to evolve and learn more every day. I keep studying and with focus and determination to achieve my goals!!</p>

        <div> 
          <InstagramLogo size={30} />
          <GithubLogo size={30} width={50}/>
          <TwitterLogo size={30} width={50}/>
          <LinkedinLogo size={30} width={50}/>
        </div>
      </Content>
      <Picture>
        <img src={HeroImage} alt="" />
      </Picture>
    </HomeContainer>
  )
}

import { AboutContainer, Content, Image, P, Span, Text } from "../styles/pages/About"
import Me from "../assets/Eduardo.jpeg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <AboutContainer id="about">
      <Content data-aos='fade-up' >
        <span>— ABOUT</span>

        <h2>About me</h2>
      </Content>
      <Text>
        <Image>
          <img src={Me} alt="" data-aos='fade-up' />
        </Image>
        <div data-aos='fade-up'>
          <h1>Eduardo Coelho</h1>
          <P>
            👋 My name is Eduardo Coelho, but you can just call me Eduardo. Pleasure!
          </P>
          <Span>
            👨‍💻 For over 11 months developing and programming interfaces with JavaScript, React JS and Typescript.
          </Span>
          <P>
            🎓 Graduating in Systems Analysis and Development at UNIFEOB University
          </P>
          <Span>
            Studying Systems Analysis and Development. I'm looking for my first opportunity as a developer. I consider myself a dedicated person who seeks to evolve and learn more every day. I keep studying and with focus and determination to achieve my goals!! <br />
            Web developer passionate about problem solving and creating solutions
            efficient for online business. I have already developed a consumer portal on the internet,
            an online app for a small business, and responsive landing pages.
            Interested in headless commerce and web application architecture and user experience
            user.
          </Span>
        </div>
      </Text>
    </AboutContainer>
  )
}

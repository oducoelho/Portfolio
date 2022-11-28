import { AboutContainer, Content, Text } from "../styles/pages/About"
import Me from "../assets/Eduardo.jpeg"
export const Services = () => {
  return (
    <AboutContainer name="about">
      <Content>
        <span>— ABOUT</span>

        <h2>About me</h2>
      </Content>
      <Text>
        <img src={Me} alt="" />
        <div>
          <h1>Eduardo Coelho</h1>
          <p>
            👋 My name is Eduardo Coelho, but you can just call me Eduardo. Pleasure!
          </p>
          <span>
            👨‍💻 For over 8 months developing and programming interfaces with JavaScript, React JS and Typescript.
          </span>
          <p>
           🎓 Graduating in Systems Analysis and Development at UNIFEOB University 
          </p>
          <span>
            Studying Systems Analysis and Development. I'm looking for my first opportunity as a developer. I consider myself a dedicated person who seeks to evolve and learn more every day. I keep studying and with focus and determination to achieve my goals!!
          </span> 
        </div>
      </Text>
    </AboutContainer>
  )
}

import { WhatsappLogo } from "phosphor-react"
import { ContactContainer, Content, Email, Header } from "../styles/pages/Contact"

export const Contact = () => {
  return (
    <ContactContainer>
      <Header>
        <span>— CONTACT</span>

        <h2>Let's Talk!</h2>
      </Header>
      <Content>
        <div>
          <button><WhatsappLogo size={20} />Let's Talk!</button>
        </div>
        <Email>
          <span>E-mail:</span>
          <p>EduardoCoelho619@gmail.com</p>
        </Email>
      </Content>
    </ContactContainer>
  )
}

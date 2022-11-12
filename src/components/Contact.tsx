import { ArrowUp, WhatsappLogo } from "phosphor-react"
import { ContactContainer, Content, Email, Footer, Header } from "../styles/pages/Contact"

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
      <Footer>
        <h1>Back to the Top <ArrowUp  /></h1>
      </Footer>
    </ContactContainer>
  )
}

import { ArrowUp, Cards, PaperPlaneTilt, WhatsappLogo } from "phosphor-react"
import { ContactContainer, Content, Email, Footer, Header } from "../styles/pages/Contact"

export const Contact = () => {
  return (
    <ContactContainer name="contact">
      <Header>
        <span>— CONTACT</span>

        <h2>Let's Talk!</h2>
      </Header>
      <Content>
        <div>
          <button><WhatsappLogo size={30} />Let's Talk!</button>
        </div>
        <Email>
          <PaperPlaneTilt size={20} color={'gray'}/>
          <span>E-mail:</span>
          <p>EduardoCoelho619@gmail.com</p>
          <Cards size={20} color={'gray'} />
        </Email>
      </Content>
      <Footer>
        <h1>Back to the Top <ArrowUp  /></h1>
      </Footer>
    </ContactContainer>
  )
}

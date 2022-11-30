import { ArrowUp, Cards, PaperPlaneTilt, WhatsappLogo } from "phosphor-react"
import { ContactContainer, Content, Email, Footer, Header } from "../styles/pages/Contact"
import { Link } from "react-scroll";
import { BackToTheTop } from "../data/Cards";

export const Contact = () => {
  return (
    <ContactContainer name="contact">
      <Header>
        <span>— CONTACT</span>

        <h2>Let's Talk!</h2>
      </Header>
      <Content>
        <Email>
          <PaperPlaneTilt size={20} color={'gray'}/>
          <span>E-mail:</span>
          <p>EduardoCoelho619@gmail.com</p>
          <Cards size={20} color={'gray'} />
        </Email>
      </Content>
      <Footer>
        {BackToTheTop.map((option) => (
          <Link to={option.link} smooth duration={700}>
            <h1>Back to the Top <ArrowUp  /></h1>
          </Link>
        ))}
      </Footer>
    </ContactContainer>
  )
}

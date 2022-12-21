import { Assunto, ContactContainer, Content, Email, Header, Menssagem, } from "../styles/pages/Contact"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <ContactContainer>
      <Header data-aos='fade-up'>
        <span>— CONTACT</span>

        <h2>Let's Talk!</h2>
      </Header>
      <Content>
        <form
          action="https://formsubmit.co/eduardocoelho619@gmail.com"
          method="POST"
        >
          <div id="Footer">
            <Email data-aos='fade-up'>
              <input type="text" name="email" placeholder="Email" />
            </Email>
            <Assunto data-aos='fade-up'>
              <input type="text" name="assunto" placeholder="Subject" />
            </Assunto>
            <Menssagem data-aos='fade-up'>
              <input type="text" name="menssagem" placeholder="Message " />
            </Menssagem>
            <button 
              data-aos='fade-up'
              type="submit" 
            >
              Enviar
            </button>
          </div>
        </form>
      </Content>

    </ContactContainer>
  )
}

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
        <form>
          <div>
            <Email data-aos='fade-up'>
              <input type="text" placeholder="Email" />
            </Email>
            <Assunto data-aos='fade-up'>
              <input type="text" placeholder="Subject" />
            </Assunto>
            <Menssagem data-aos='fade-up'>
              <input type="text" placeholder="Message " />
            </Menssagem>
            <button data-aos='fade-up'>Enviar</button>
          </div>
        </form>
      </Content>

    </ContactContainer>
  )
}

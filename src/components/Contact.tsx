import {  ContactContainer, Content, Header } from "../styles/pages/Contact"
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
        <div id="Footer">
          <div>
            <p><strong>E-mail:</strong> eduardocoelho619@gmail.com</p>
            <p><strong>Phone:</strong> {"(19) 9 7168-7361"}</p>
          </div>
        </div>
      </Content>
    </ContactContainer>
  )
}
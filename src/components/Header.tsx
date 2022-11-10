import { Moon } from "phosphor-react"
import { HeaderContainer, Options } from "../styles/pages/Header"
import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo"/>

      <Options>
        <span>Home</span>
        <span>Services</span>
        <span>Portifolio</span>
        <span>Experience</span>
        <span>Contact</span>
      </Options>

      <div>
        <div>
          <Moon onClick={() => alert('trocou o tema')} size={20} />
        </div>
        <button onClick={() => alert('baixou o cv')} >Download CV</button>
      </div>
    </HeaderContainer>
  )
}

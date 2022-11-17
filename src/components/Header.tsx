import { HeaderContainer, Options } from "../styles/pages/Header"
import logo from '../assets/svgs/logo.svg'
//import { useState } from "react"
import { HeaderData } from "../data/Cards"
//import { Link } from "react-scroll";

export const Header = () => {
  //const [ nav, setNav ] = useState(false)
  return (
    <HeaderContainer>
      <span>Eduardo</span>

      <Options>
        {HeaderData.map((option) => (
          <span>{option.name}</span>
        ))}
      </Options>
      {/*<div
        onClick={() => setNav(!nav)}
      >
        {nav ? <Hamburger size={30} /> : <X size={30} />}
      </div>
      {nav && (
        <ul>
          {HeaderData.map((option) => (
              <span>{option.name}</span>
            ))}
        <Link
          onClick={() => setNav(!nav)}
          to={HeaderData}
          smooth
          duration={500}
          >
          {HeaderData}
        </Link>
        </ul>
      )}*/}
    </HeaderContainer>
  )
}

import { HeaderContainer, MobileIcon, MobileOptions, Options } from "../styles/pages/Header"
import { HeaderData } from "../data/Cards"
import { Link } from "react-scroll";
import LogoApp from "../assets/Logo.png";
import { useState } from "react";
import { TextAlignJustify, X } from "phosphor-react";

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <HeaderContainer>
      <img src={LogoApp} alt="" />

      <MobileIcon onClick={() => setMenuIsVisible(!menuIsVisible)}>
        {menuIsVisible ? <X size={30} color="#ffffff" /> : <TextAlignJustify size={30} color="#ffffff" />}
      </MobileIcon>

      {menuIsVisible && (
        <MobileOptions>
          {HeaderData.map((option) => (
            <Link
              to={option.link}
              smooth duration={700}
              onClick={() => setMenuIsVisible(!menuIsVisible)}
            >
              <p key={option.name}>
                {option.name}
              </p>
            </Link>
          ))}
        </MobileOptions>
      )}

      <Options>
        {HeaderData.map((option) => (
          <Link to={option.link} smooth duration={700}>
            <span key={option.name}>
              {option.name}
            </span>
          </Link>
        ))}
      </Options>
    </HeaderContainer>
  )
}
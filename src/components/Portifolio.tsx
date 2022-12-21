import { PortifolioData } from "../data/Cards"
import { Content, Header, Options, PortifolioContainer, Tags, Title } from "../styles/pages/Portifolio"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Portifolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <PortifolioContainer name="portfolio">
      <Header data-aos='fade-up'>
        <span>— PORTIFOLIO</span>

        <h2>My Projects</h2>
      </Header>
      <Content  data-aos='fade-up'>
        {PortifolioData.map((portifolio) => (
          <div>
              <Options>
                <Title>
                  <h3>{portifolio.title}</h3>
                  <p>{portifolio.resume}</p>
                </Title>

                <Tags>
                  <span>{portifolio.lenguage}</span>
                  <span>{portifolio.lenguage2}</span>
                </Tags>
              </Options>
            <a href={portifolio.code} target={"_blank"}>
              <img src={portifolio.image} alt="" />
            </a>
          </div>
        ))}
      </Content>
    </PortifolioContainer>
  )
}

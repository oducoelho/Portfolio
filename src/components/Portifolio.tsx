import { Share } from "phosphor-react"
import { PortifolioData } from "../data/Cards"
import { Content, Header, Options, PortifolioContainer, Tags, Title } from "../styles/pages/Portifolio"

export const Portifolio = () => {
  return (
    <PortifolioContainer name="portfolio">
      <Header>
        <span>— PORTIFOLIO</span>

        <h2>My Projects</h2>
      </Header>
      <Content>
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

import { Share } from "phosphor-react"
import { PortifolioData } from "../data/Cards"
import { Content, Header, Options, PortifolioContainer } from "../styles/pages/Portifolio"

export const Portifolio = () => {
  return (
    <PortifolioContainer>
      <Header>
        <span>— PORTIFOLIO</span>

        <h2>My Projects</h2>
      </Header>
      <Content>
        {PortifolioData.map((portifolio) => (
          <div>
            <img src={portifolio.image} alt="" />
            <Options>
              <h3>{portifolio.title}</h3>
              <div>
                <span>{portifolio.lenguage}</span>
                <Share size={20} />
              </div>
            </Options>
          </div>
        ))}
      </Content>
    </PortifolioContainer>
  )
}

import { AcademicaData, ProfissionalData } from "../data/Cards"
import { Academica, CarrerContainer, Content, Header, Options, Proficional, Tags, Title } from "../styles/pages/Carrer"

export const Career = () => {
  return (
    <CarrerContainer name="carrer">
      <Header>
        <span>— CARRER</span>

        <h2>Trajectory so Far</h2>
      </Header>
      <Content>
        <Proficional>
          <h2>Professional</h2>
            {ProfissionalData.map((profissional) => (
                <div>
                  <Options>
                    <Title>
                      <h3>{profissional.title}</h3>
                      <p>{profissional.resume}</p>
                    </Title>
                    <Tags>
                      <span><strong>{profissional.time}</strong></span>
                      <span>{profissional.date}</span>
                    </Tags>
                  </Options>
                </div>
              ))}
        </Proficional>

        
        <Academica>
          <h2>Academic</h2>
            {AcademicaData.map((academica) => (
              <div>
                <Options>
                  <Title>
                    <h3>{academica.title}</h3>
                    <p>{academica.resume}</p>
                  </Title>
                  <Tags>
                    <span><strong>{academica.time}</strong></span>
                    <span>{academica.date}</span>
                  </Tags>
                </Options>
              </div>
            ))}
        </Academica>
      </Content>
    </CarrerContainer>
  )
}

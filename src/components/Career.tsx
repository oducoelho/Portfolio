import { AcademicaData, ProfissionalData } from "../data/Cards"
import { Academica, CarrerContainer, Content, Header, Options, Proficional, Tags, Title } from "../styles/pages/Career"

export const Career = () => {
  return (
    <CarrerContainer>
      <Header>
        <span>— CARRER</span>

        <h2>Trajectory so Far</h2>
      </Header>

      <Content>
        <Proficional>
          <h2>Proficional</h2>
            {ProfissionalData.map((profissional) => (
                <div>
                  <Options>
                    <Title>
                      <h3>{profissional.title}</h3>
                      <p>{profissional.resume}</p>
                    </Title>
                    <Tags>
                      <span>{profissional.time}</span>
                      <span>{profissional.date}</span>
                    </Tags>
                  </Options>
                </div>
              ))}
        </Proficional>

        
        <Academica>
          <h2>Acadêmica</h2>
            {AcademicaData.map((academica) => (
              <div>
                <Options>
                  <Title>
                    <h3>{academica.title}</h3>
                    <p>{academica.resume}</p>
                  </Title>
                  <Tags>
                    <span>{academica.time}</span>
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

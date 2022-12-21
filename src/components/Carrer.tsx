import { AcademicaData, ProfissionalData } from "../data/Cards"
import { Academica, CarrerContainer, Content, Header, Options, Proficional, Tags, Title } from "../styles/pages/Carrer"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
export const Career = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <CarrerContainer id="carrer">
      <Header data-aos='fade-up'>
        <span>— CARRER</span>

        <h2>Trajectory so Far</h2>
      </Header>
      <Content>
        <Proficional data-aos='fade-up'>
          <h2>Professional</h2>
            {ProfissionalData.map((profissional) => (
                <div data-aos='fade-up' >
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

        
        <Academica data-aos='fade-up'>
          <h2>Academic</h2>
            {AcademicaData.map((academica) => (
              <div data-aos='fade-up' >
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

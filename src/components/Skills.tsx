import { Box, Content, Header, SkillsContainer } from "../styles/pages/Skills"
import { skills } from "../data/Cards"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <SkillsContainer>
      <Header data-aos='fade-up' >
        <span id="skills">— SKILLS</span>

        <h2>Technologies and skills</h2>
      </Header>
      <Content data-aos='fade-up'>
        <span>Technologies I use in my day to day</span>
        <Box >
        {skills.map((skill) => (
            <div key={skill.id} data-aos='fade-up'>
              <img src={skill.image} width={100} alt='' />
              <p>{skill.title}</p>
            </div>
        ))}
        </Box>
      </Content>
    </SkillsContainer>
  )
}

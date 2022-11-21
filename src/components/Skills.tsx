import { Box, Content, Header, SkillsContainer } from "../styles/pages/Skills"
import { skills } from "../data/Cards"

export const Skills = () => {
  return (
    <SkillsContainer name="skills">
      <Header>
        <span>— SKILLS</span>

        <h2>Technologies and skills</h2>
      </Header>
      <Content>
        <span>Techs que uso no dia a dia</span>
        <Box >
        {skills.map((skill) => (
            <div key={skill.id}>
              <img src={skill.image} width={100} alt='' />
              <p>{skill.title}</p>
            </div>
        ))}
        </Box>
      </Content>
    </SkillsContainer>
  )
}

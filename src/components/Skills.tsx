import { Content, Header, SkillsContainer } from "../styles/pages/Skills"
import WorkingTechs from '../assets/WorkingTechs.png'

export const Skills = () => {
  return (
    <SkillsContainer>
      <Header>
        <span>— SKILLS</span>

        <h2>Technologies and skills</h2>
      </Header>
      <Content>
        <span>Techs que uso no dia a dia</span>
        <img src={WorkingTechs} alt="" />
      </Content>
    </SkillsContainer>

  )

}

import { Specializ } from "../data/Cards"
import { Boxes, Content, Image, ServicesContainer } from "../styles/pages/Services"

export const Services = () => {
  return (
    <ServicesContainer>
      <Content>
        <span>— SERVICES</span>

        <h2>Specialized in</h2>
      </Content>
      <Boxes> 
        {Specializ.map((Specializs) => (
          <div>
            <Image>
              <img src={Specializs.image} alt="" />
            </Image>
            <span key={Specializs.id} >{Specializs.title}</span>
            <p>{Specializs.content}</p>
          </div>
        ))}
      </Boxes>
    </ServicesContainer>
  )
}

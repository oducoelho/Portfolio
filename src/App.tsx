import { Career } from "./components/Career"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Portifolio } from "./components/Portifolio"
import { Services } from "./components/About"
import { Skills } from "./components/Skills"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Portifolio />
      <Skills />
      <Career />
      <Contact />
      <Footer />
    </div>
  )
}


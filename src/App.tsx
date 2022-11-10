import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Portifolio } from "./components/Portifolio"
import { Services } from "./components/Services"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Portifolio />
    </div>
  )
}


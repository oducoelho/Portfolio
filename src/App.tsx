import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Services } from "./components/Services"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Services />
    </div>
  )
}


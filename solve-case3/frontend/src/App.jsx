import HeroArea from "./components/layout/HeroArea"
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar"
import GreenSpace from "./components/layout/GreenSpace"
import SquaredGreenSpace from "./components/layout/SquaredGreenSpace"
import TopProduct from "./components/layout/TopProduct"
import Footer from "./components/layout/Footer"
import AboutGreenest from "./components/layout/AboutGreenest"

function App() {

  return (
    <>
      {/* App Bar */}
      <ResponsiveAppBar />
      {/* Hero Area */}
      <HeroArea />
      {/* Green Space */}
      <GreenSpace />
      {/* Squared Green Space */}
      <SquaredGreenSpace height="75px" />
      {/* About */}
      <AboutGreenest />
      {/* Top Product */}
      <TopProduct />
      {/* SquaredGreenSpace */}
      <SquaredGreenSpace height="70px" />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App

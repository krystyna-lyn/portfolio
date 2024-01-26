import { BrowserRouter } from "react-router-dom"

import { Contact, About, Navbar, Parallax, Portfolio, Tech, StarsCanvas, } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
        <section>
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App

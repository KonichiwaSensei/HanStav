import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import './App.scss'
import NavigationBar from "./Components/NavigationBar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import Reference from "./Pages/Reference"
import Stavby from "./Pages/Stavby"
import RodDom from "./Pages/RodDom"
import InzCin from "./Pages/InzCin"
import ProjKan from "./Pages/ProjKan"
import Hypoteka from "./Pages/Hypoteka"
import Reality from "./Pages/Reality"
import Kontakt from "./Pages/Kontakt"

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* <BrowserRouter> */}

        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/stavby" element={<Stavby />} />
          <Route path="/projekty-rodinnych-domu" element={<RodDom />} />
          <Route path="/inzenyrska-cinnost" element={<InzCin />} />
          <Route path="/projekcni-kancelar" element={<ProjKan />} />
          {/* <Route path="/hypoteka" element={<Hypoteka />} /> */}
          <Route path="/reality" element={<Reality />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>

        <Footer />

      {/* </BrowserRouter> */}
    </>
  )
}

export default App

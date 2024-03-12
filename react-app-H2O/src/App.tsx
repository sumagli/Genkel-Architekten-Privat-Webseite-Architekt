import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Imprint from './Components/Imprint/Imprint'
import Navbar from './Components/Navbar/Navbar';
import DataSecurity from './Components/DataSecurity/DataSecurity';
import React from 'react';
import MenuOverlay from './Components/MenuOverlay/MenuOverlay';
import Vita from './Components/Vita/Vita';
import { useTeamImages, useVitaIris, useVitaSabine, useVitaIlona } from './Helper/service';


function App() {
  const [overlay, setOverlay] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const teamImages = useTeamImages();
  const irisTimeline = useVitaIris();
  const sabieneTimeline = useVitaSabine();
  const ilonaTimeline = useVitaIlona();

  React.useEffect(() => {
    if (!overlay) {
      setTimeout(() => setShowOverlay(false), 300); // 300ms matches the CSS animation duration
    } else {
      setShowOverlay(true);
    }
  }, [overlay]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <>
              <Navbar mainPage={true} setOverlay={setOverlay} overlay={overlay} />

              <Home teamImages={teamImages} overlay={overlay} />
              {showOverlay &&
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              }
            </>
          }
        />

        <Route
          path="/Impressum"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Imprint />
            </>
          }
        />
        <Route
          path="/Datenschutz"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <DataSecurity />
            </>
          }
        />
        <Route
          path="/Vita-Iris"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"iris.eiblmeier@t-online.de"} name={"Iris Eiblmeier"} profession={"Friseurmeisterin"} image={teamImages.ImageUrls[1]} timelineEvents={irisTimeline} />
            </>
          }
        />
        <Route
          path="/Vita-Sabine"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"sabinegehlen2307@gmail.com"} name={"Sabine Gehlen-Teshome"} profession={"Friseurmeisterin"} image={teamImages.ImageUrls[2]} timelineEvents={sabieneTimeline} />
            </>
          }
        />
        <Route
          path="/Vita-Ilona"
          element={
            <>
              <Navbar mainPage={false} setOverlay={setOverlay} overlay={overlay} />
              <Vita email={"ilona@foto-scheffbuch.de"} name={"Ilona Scheffbuch"} profession={"Friseurmeisterin & Fotografin"} image={teamImages.ImageUrls[3]} timelineEvents={ilonaTimeline} />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

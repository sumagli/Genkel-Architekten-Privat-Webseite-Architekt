import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Imprint from "./Components/Imprint/Imprint";
import Navbar from "./Components/Navbar/Navbar";
import DataSecurity from "./Components/DataSecurity/DataSecurity";
import React from "react";
import MenuOverlay from "./Components/MenuOverlay/MenuOverlay";
import Vita from "./Components/Vita/Vita";
import {
  useTeamImages,
  useVitaIris,
  useVitaSabine,
  useVitaIlona,
} from "./Helper/service";

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
        <Route
          path="/"
          element={
            <>
              <Navbar
                mainPage={true}
                setOverlay={setOverlay}
                overlay={overlay}
              />

              <Home teamImages={teamImages} overlay={overlay} />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />

        <Route
          path="/Impressum"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Imprint />
            </>
          }
        />
        <Route
          path="/Datenschutz"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <DataSecurity />
            </>
          }
        />
        <Route
          path="/Lebenslauf"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Vita
                email={"genkel@genkelarchitekten.com"}
                name={"Jörn Genkel"}
                profession={"Architekt - Dipl. Ing. (FH)rin"}
                image={teamImages.ImageUrls[1]}
                timelineEvents={irisTimeline}
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

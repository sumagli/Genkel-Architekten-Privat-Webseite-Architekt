import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Imprint from "./Components/Imprint/Imprint";
import Navbar from "./Components/Navbar/Navbar";
import DataSecurity from "./Components/DataSecurity/DataSecurity";
import React from "react";
import MenuOverlay from "./Components/MenuOverlay/MenuOverlay";
import Vita from "./Components/Vita/Vita";
import { useProjects, useVitaJoern } from "./Helper/service";
import Lebenslauf from "./Assats/Images/lebenslauf.png";
import Projects from "./Components/Projects/Projects";
import SpecificProject from "./Components/SpecificProject/SpecificProject";
import testPicture from "./Assats/Images/home/P1080211.jpg";
import testPicture2 from "./Assats/Images/home/IMG_9666.jpg";
import Credit from "./Components/Credit/Credit";

import balingen1 from "./Assats/Images/Jugenhaus/Röcker Gork (4).jpg";
import balingen2 from "./Assats/Images/Jugenhaus/Röcker Gork (5).jpg";
import balingen3 from "./Assats/Images/Jugenhaus/Röcker Gork (6).jpg";

import kita1 from "./Assats/Images/KitaHohenahr/Röcker Gork frank schulte photography + Kai Laumann Holzbau (1).jpg";
import kita2 from "./Assats/Images/KitaHohenahr/Röcker Gork frank schulte photography + Kai Laumann Holzbau (2).jpg";
import kita3 from "./Assats/Images/KitaHohenahr/Röcker Gork frank schulte photography + Kai Laumann Holzbau (3).jpg";

import test123 from "./Assats/Images/home/IMG_9666.jpg";
import Partner from "./Components/Partner/Partner";
import OfficeProfile from "./Components/OfficeProfile/OfficeProfile";

export interface ImagePlus {
  imageLink: string;
  photoBy: string;
}

export interface Project {
  name: string;
  image: ImagePlus[];
  title: string;
  subtitle: string;
  partner: string;
  buildingTime: string;
  bauherr: string;
  Taetigkeitsfelder: string;
  BeschreibungMaßnahme: string;
  link: string;
  info: string;
  mainPagePosition: number;
  direktLink: string;
}

export interface ProjectsArray {
  projects: Project[];
}

function App() {
  const [overlay, setOverlay] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const joernTimeline = useVitaJoern();

  const data = useProjects();
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

              <Home overlay={overlay} projects={data} />
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
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />

        <Route
          path="/Partner"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Partner />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />

        <Route
          path="/Bueroprofil"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <OfficeProfile />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />

        <Route
          path="/Credit"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Credit />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />
        <Route
          path="/Projekte"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Projects projects={data} />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />
        <Route
          path="/projekte/:title"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <SpecificProject projects={data} />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
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
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />
        <Route
          path="/Vita"
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
                image={Lebenslauf}
                timelineEvents={joernTimeline}
              />
              {showOverlay && (
                <MenuOverlay setOverlay={setOverlay} overlay={overlay} />
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

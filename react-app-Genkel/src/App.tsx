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
import Lebenslauf from "./Assats/Images/lebenslauf.png";
import Projects from "./Components/Projects/Projects";
import SpecificProject from "./Components/SpecificProject/SpecificProject";
import testPicture from "./Assats/Images/home/P1080211.jpg";
import testPicture2 from "./Assats/Images/home/IMG_9666.jpg";

export interface Project {
  name: string;
  image: string[];
  title: string;
  subtitle: string;
  partner: string;
  buildingTime: string;
  bauherr: string;
  Taetigkeitsfelder: string;
  BeschreibungMaßnahme: string;
  link: string;
  info: string;
  photoBy: string;
}

export interface ProjectsArray {
  projects: Project[];
}

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

  const data = [
    {
      name: "Project1",
      image: [testPicture, testPicture2],
      title: "Title1",
      subtitle: "Subtitle1",
      partner: "Partner1",
      buildingTime: "2020-2021",
      bauherr: "Bauherr1",
      Taetigkeitsfelder: "Taetigkeitsfelder1",
      BeschreibungMaßnahme: "BeschreibungMaßnahme1",
      link: "",
      photoBy: "test",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      name: "Project1",
      image: [testPicture, testPicture2],
      title: "Title2",
      subtitle: "Subtitle1",
      partner: "Partner1",
      buildingTime: "2020-2021",
      bauherr: "Bauherr1",
      Taetigkeitsfelder: "Taetigkeitsfelder1",
      BeschreibungMaßnahme: "BeschreibungMaßnahme1",
      link: "",
      photoBy: "test",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      name: "Project1",
      image: [testPicture, testPicture2],
      title: "Title3",
      subtitle: "Subtitle1",
      partner: "Partner1",
      buildingTime: "2020-2021",
      bauherr: "Bauherr1",
      Taetigkeitsfelder: "Taetigkeitsfelder1",
      BeschreibungMaßnahme: "BeschreibungMaßnahme1",
      link: "https://www.google.com/",
      photoBy: "",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      name: "Project1",
      image: [testPicture, testPicture2],
      title: "Title4",
      subtitle: "Subtitle1",
      partner: "Partner1",
      buildingTime: "2020-2021",
      bauherr: "Bauherr1",
      Taetigkeitsfelder: "Taetigkeitsfelder1",
      BeschreibungMaßnahme: "BeschreibungMaßnahme1",
      link: "https://www.google.com/",
      photoBy: "",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      name: "Project1",
      image: [testPicture, testPicture2],
      title: "Title5",
      subtitle: "Subtitle1",
      partner: "Partner1",
      buildingTime: "2020-2021",
      bauherr: "Bauherr1",
      Taetigkeitsfelder: "Taetigkeitsfelder1",
      BeschreibungMaßnahme: "BeschreibungMaßnahme1",
      link: "",
      photoBy: "",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ];

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
          path="/Projekte"
          element={
            <>
              <Navbar
                mainPage={false}
                setOverlay={setOverlay}
                overlay={overlay}
              />
              <Projects projects={data} />
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
                image={Lebenslauf}
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

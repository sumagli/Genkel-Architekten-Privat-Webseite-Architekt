import React from "react";
import styles from "./Home.module.css";
import MainPage from "../MainPage/MainPage";
import News from "../News/News";
import testPicture from "../../Assats/Images/home/P1080211.jpg";
import NewFooter from "../NewFooter/NewFooter";
import { ProjectsArray } from "../../App";
import ImageComponent from "../ImageComponent/ImageComponent";
import { ImageComponentProps } from "../SpecificProject/SpecificProject";
import oe1 from "../../Assats/Images/news/oesterfeld.jpg";
import raum from "../../Assats/Images/news/raum.jpg";

interface HomeProps {
  overlay: boolean;
  projects: ProjectsArray;
}

const exampleNewsData = [
  {
    picture: oe1,
    date: "	06.12.2023",
    title: "Österfeldschule",
    shortText:
      "Wir machen ein neues Projekt mit asp architekten. Die Österfeldschule in Stutgart Vaihinge",
    longText: "",
    link: "http://localhost:3000/projekte/Jugendhaus",
    linkText: "Zum Projekt",
  },
  {
    picture: raum,
    date: "	23.10.2023",
    title: "Umzug",
    shortText:
      "Neue Büroräume + neue Adresse, ab sofort kommt Post hier an Heinrich-Baumann-Str. 7b 70190 Stuttgart",
    longText: "",
  },
  {
    picture: testPicture,
    date: "2023-03-20",
    title: "Another Important Update",
    shortText: "Brief overview of another important news update.",
    longText:
      "This is the extended version of the news update. It goes into great detail about the subject matter, providing valuable insights and information.",
  },
  {
    picture: testPicture,
    date: "2023-03-20",
    title: "Another Important Update",
    shortText: "Brief overview of another important news update.",
    longText:
      "This is the extended version of the news update. It goes into great detail about the subject matter, providing valuable insights and information.",
  },
];

export default function Home({ overlay, projects }: HomeProps) {
  const specificProjects = projects.projects
    .filter((project) => project.mainPagePosition !== 0)
    .sort((a, b) => a.mainPagePosition - b.mainPagePosition);

  const helper: ImageComponentProps = {
    imagePlus: [],
    ImageComponentTextProps: [],
  };

  specificProjects.forEach((project) => {
    if (project.image && project.image.length > 0) {
      helper.imagePlus.push({
        imageLink: project.image[0].imageLink,
        photoBy: project.image[0].photoBy,
      });
    }

    helper.ImageComponentTextProps.push({
      title: project.title,
      location: project.subtitle,
      partner: project.partner,
      link: project.link,
    });
  });
  console.log(helper);

  return (
    <div className={styles.home}>
      <div id="Home">
        <ImageComponent ImageComponentProps={helper} />
      </div>
      <div id="Directions">
        <News newsData={exampleNewsData} />
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

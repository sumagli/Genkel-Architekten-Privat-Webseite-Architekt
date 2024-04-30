import React from "react";
import styles from "./Home.module.css";
import MainPage from "../MainPage/MainPage";
import News from "../News/News";
import testPicture from "../../Assats/Images/home/P1080211.jpg";
import NewFooter from "../NewFooter/NewFooter";
import { Project, ProjectsArray } from "../../App";
import ImageComponent from "../ImageComponent/ImageComponent";
import { ImageComponentProps } from "../SpecificProject/SpecificProject";
import oe1 from "../../Assats/Images/news/oesterfeld.jpg";
import raum from "../../Assats/Images/news/raum.jpg";
import { useNews } from "../../Helper/service";

interface HomeProps {
  overlay: boolean;
  projects: Project[];
}

export default function Home({ overlay, projects }: HomeProps) {
  const news = useNews();

  const specificProjects = projects
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
        <News newsData={news} />
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

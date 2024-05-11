import { useEffect } from "react";
import styles from "./SpecificProject.module.css";
import "../../Assats//Fonts/Fonts.css";
import NewFooter from "../NewFooter/NewFooter";
import ImageComponent from "../ImageComponent/ImageComponent";
import { ProjectsArray } from "../../App";
import { useParams } from "react-router-dom";
import { useProjects } from "../../Helper/service";

export interface ImageComponentTextProps {
  title: string;
  location: string;
  partner: string;
  link: string;
}

export interface ImagePlus {
  imageLink: string;
  photoBy: string;
}

export interface ImageComponentProps {
  imagePlus: ImagePlus[];
  ImageComponentTextProps: ImageComponentTextProps[];
}

export default function SpecificProject({ projects }: ProjectsArray) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { title } = useParams();
  const specificProject = projects.filter((project) => project.title == title);
  const singleProject = specificProject[0];

  const helper: ImageComponentProps = {
    imagePlus: singleProject?.image,
    ImageComponentTextProps: [
      {
        title: singleProject?.title,
        location: singleProject?.subtitle,
        partner: singleProject?.partner,
        link: "-1",
      },
    ],
  };

  return (
    <div className={styles.Container}>
      <ImageComponent ImageComponentProps={helper} />
      <div className={styles.officeProfileContainer}>
        {singleProject?.buildingTime && (
          <h3 className={styles.serviceSection}>
            Bauzeit: {singleProject?.buildingTime}
          </h3>
        )}
        {singleProject?.bauherr && (
          <h3 className={styles.serviceSection}>
            Bauhher: {singleProject?.bauherr}
          </h3>
        )}
        {singleProject?.Taetigkeitsfelder && (
          <h3 className={styles.serviceSection}>
            Täigkeitsfelder_ {singleProject?.Taetigkeitsfelder}
          </h3>
        )}
        {singleProject?.BeschreibungMaßnahme && (
          <h3 className={styles.serviceSection}>
            Beschreibung Maßnahme: {singleProject?.BeschreibungMaßnahme}
          </h3>
        )}
        {singleProject?.info && (
          <h3 className={styles.serviceSection}>{singleProject?.info}</h3>
        )}
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

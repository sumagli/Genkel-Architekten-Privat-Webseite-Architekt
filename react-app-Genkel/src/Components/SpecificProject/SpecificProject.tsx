import React, { useEffect, useRef, useState } from "react";
import styles from "./SpecificProject.module.css";
import "../../Assats//Fonts/Fonts.css";
import { ThemeProvider } from "@mui/material/styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import NewFooter from "../NewFooter/NewFooter";
import ImageComponent from "../ImageComponent/ImageComponent";
import test from "../../Assats/Images/home/P1080211.jpg";
import { ProjectsArray } from "../../App";
import { useParams } from "react-router-dom";

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
  const specificProject = projects.filter((project) => project.title === title);
  const singleProject = specificProject[0];
  console.log(specificProject);

  const helper: ImageComponentProps = {
    imagePlus: singleProject.image,
    ImageComponentTextProps: [
      {
        title: singleProject.title,
        location: singleProject.subtitle,
        partner: singleProject.partner,
        link: "-1",
      },
    ],
  };

  return (
    <div className={styles.Container}>
      <ImageComponent ImageComponentProps={helper} />
      <div className={styles.officeProfileContainer}>
        <h3 className={styles.serviceSection}>
          Bauzeit: {singleProject.buildingTime}
        </h3>
        <h3 className={styles.serviceSection}>
          Bauhher: {singleProject.bauherr}
        </h3>
        <h3 className={styles.serviceSection}>
          Täigkeitsfelder_ {singleProject.Taetigkeitsfelder}
        </h3>
        <h3 className={styles.serviceSection}>
          Beschreibung Maßnahme: {singleProject.BeschreibungMaßnahme}
        </h3>
        <h3 className={styles.serviceSection}>{singleProject.info}</h3>
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

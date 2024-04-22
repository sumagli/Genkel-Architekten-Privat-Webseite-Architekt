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

export default function SpecificProject({ projects }: ProjectsArray) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { title } = useParams();
  const specificProject = projects.filter((project) => project.title === title);
  const singleProject = specificProject[0];
  console.log(specificProject);

  return (
    <div className={styles.Container}>
      <ImageComponent project={singleProject} />
      <div className={styles.additonallStuff}>
        <h3>Bauzeit: {singleProject.buildingTime}</h3>
        <h3>Bauhher: {singleProject.bauherr}</h3>
        <h3>Täigkeitsfelder_ {singleProject.Taetigkeitsfelder}</h3>
        <h3>Beschreibung Maßnahme: {singleProject.BeschreibungMaßnahme}</h3>
        <h3>{singleProject.info}</h3>
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import styles from "./Vita.module.css";
import "../../Assats//Fonts/Fonts.css";
import VitaPages from "./VitaPages/VitaPages";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import NewFooter from "../NewFooter/NewFooter";

const Vita = ({ email, name, profession, image, timelineEvents }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.Container}>
      <ThemeProvider theme={theme}>
        <VitaPages
          showButtonText={false}
          uperTitle={email}
          title={name}
          subTitle={profession}
          buttonText={"undefined"}
          isVisible={true}
          blur={true}
          textPositionDown={true}
          imageUrl={image}
        />
        <div className={styles.scrolldownIndicator}></div>

        <div className={styles.Vita}>
          <h1>Vita</h1>

          <Timeline>
            {timelineEvents.map((event: any, index: any) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {event.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < timelineEvents.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <div className={styles.rightContent}>
                    {event.leistungsphase}
                    <br />
                    {event.projekt}
                    <br />
                    {event.partner}
                    <br />
                    {event.rendering}
                    <br />
                    <br />
                    <br />
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <div className={styles.test} />
      </ThemeProvider>

      <NewFooter mainPage={false} />
    </div>
  );
};

export default Vita;

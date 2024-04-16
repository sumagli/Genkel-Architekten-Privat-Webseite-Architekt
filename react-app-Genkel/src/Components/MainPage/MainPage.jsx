import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "./MainPage.module.css";
import Typography from "@mui/material/Typography";
import { useVacationMessage, useMainPageImages } from "../../Helper/service.ts";
import unilever from "../../Assats/Images/home/65_001_Unilever_002_H.jpg";
import RoeckerGork from "../../Assats/Images/home/Röcker Gork (4).jpg";
import test2 from "../../Assats/Images/home/IMG_9666.jpg";
import test3 from "../../Assats/Images/home/P1080211.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MainPage = ({ isVisible, blur }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const vacationMessage = useVacationMessage();

  const ImageUrls = [
    {
      src: unilever,
      alt: "Unilever",
      title: "Unilever",
      subtitle: "Hamburg",
      partner: "Benisch",
    },
    {
      src: RoeckerGork,
      alt: "Roecker Gork",
      title: "Jugendhaus",
      subtitle: "Balingen",
      partner: "Benisch",
    },
    {
      src: test2,
      alt: "Test Image 2",
      title: "Hochschule der Medien",
      subtitle: "Stuttgart",
      partner: "Benisch",
    },
    {
      src: test3,
      alt: "Test Image 3",
      title: "Tolles Gebauede",
      subtitle: "Stuttgart",
      partner: "Benisch",
    },
  ];

  return (
    <Box className={styles.slideshowContainer}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
      >
        {ImageUrls.map((imageUrl, index) => (
          <div key={index}>
            <Box
              component="img"
              className={`${styles.imageBox}`} // Apply blurEffect class conditionally
              src={imageUrl.src}
              alt={imageUrl.alt}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className={styles.textContent}>
        <div
          className={`${styles.uperTitle} ${
            isVisible
              ? styles.animateonvisiblecenteredText
              : styles.animateOutCenteredText
          }`}
        >
          {ImageUrls[activeStep].title}
        </div>
        <div
          className={`${styles.centeredText} ${
            isVisible
              ? styles.animateonvisiblecenteredText
              : styles.animateOutCenteredText
          }`}
        >
          {ImageUrls[activeStep].subtitle}
        </div>
        <div
          className={`${styles.subTitle} ${
            isVisible
              ? styles.animateonvisiblesubTitle
              : styles.animateOutSubTitle
          }`}
        >
          {ImageUrls[activeStep].partner}
        </div>
      </div>
    </Box>
  );
};

export default MainPage;

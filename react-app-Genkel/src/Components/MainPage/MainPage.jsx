import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import IconButton from "@mui/material/IconButton"; // Use IconButton for direct icon interaction
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./MainPage.module.css";
import Typography from "@mui/material/Typography";
import unilever from "../../Assats/Images/home/65_001_Unilever_002_H.jpg";
import RoeckerGork from "../../Assats/Images/home/Röcker Gork (4).jpg";
import test2 from "../../Assats/Images/home/IMG_9666.jpg";
import test3 from "../../Assats/Images/home/P1080211.jpg";
import MobileStepper from "@mui/material/MobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MainPage = ({ isVisible }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const ImageUrls = [
    {
      src: unilever,
      alt: "Unilever",
      title: "Unilever",
      subtitle: "Hamburg",
      partner: "Benisch",
      link: "/projects/unilever",
    },
    {
      src: RoeckerGork,
      alt: "Roecker Gork",
      title: "Jugendhaus",
      subtitle: "Balingen",
      partner: "Benisch",
      link: "www.google.com",
    },
    {
      src: test2,
      alt: "Test Image 2",
      title: "Hochschule der Medien",
      subtitle: "Stuttgart",
      partner: "Benisch",
      link: "/projects/unilever",
    },
    {
      src: test3,
      alt: "Test Image 3",
      title: "Tolles Gebauede",
      subtitle: "Stuttgart",
      partner: "Benisch",
      link: "/projects/unilever",
    },
  ];

  const maxSteps = ImageUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps); // Wrap to the first image when reaching the end
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

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
      <div>
        <Box className={styles.stepperBox}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              color: "white",
              backgroundColor: "transparent",
              width: "auto",
            }}
          />
        </Box>
        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,

            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            fontSize: "2rem",
          }}
        >
          <KeyboardArrowLeft fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,

            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            fontSize: "2rem",
          }}
        >
          <KeyboardArrowRight fontSize="inherit" />
        </IconButton>
      </div>
      <div className={styles.textContent}>
        <div
          className={`${styles.uperTitle} ${
            isVisible
              ? styles.animateonvisibleuperTitle
              : styles.animateOutUperTitle
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

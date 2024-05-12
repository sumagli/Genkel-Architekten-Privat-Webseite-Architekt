import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import styles from "./VitaPages.module.css";
import { Link } from "react-router-dom";
import { useVitaPictures } from "../../../Helper/service.ts";
import { Helmet } from "react-helmet";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const VitaPages = ({
  imageUrl,
  isVisible,
  blur,
  textPositionDown,
  uperTitle,
  title,
  subTitle,
  showButtonText,
  buttonText,
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const modifiedTitle = title.split(" ")[0];
  const test = 1;

  return (
    <Box className={styles.slideshowContainer}>
      <Helmet>
        <title>Vita - Jörn Genkel</title>
        <meta
          name="description"
          content="Jörn Genkel, der Leiter von Genkel Architekten, stellt seinen beruflichen Werdegang und Projekte vor. Erfahren Sie mehr über seine Erfahrungen und Beiträge zur Architektur."
        />
        <meta
          name="keywords"
          content="Jörn Genkel, Lebenslauf, Architekt, Genkel Architekten, Projektbeteiligungen, Architekturerfahrung, Stuttgart"
        />
      </Helmet>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
      >
        <div>
          <Box
            component="img"
            className={`${styles.imageBox}`}
            src={imageUrl}
            alt="Vita Image"
          />
        </div>
      </AutoPlaySwipeableViews>
      <div className={styles.textContentDown}>
        <div
          className={`${styles.uperTitle} ${
            isVisible
              ? styles.animateonvisibleuperTitle
              : styles.animateOutUperTitle
          }`}
        >
          {
            <a
              className={styles.email}
              href="mailto:genkel@genkelarchitekten.com"
            >
              genkel@genkelarchitekten.com
            </a>
          }
        </div>
        <div
          className={`${styles.centeredText} ${
            isVisible
              ? styles.animateonvisiblecenteredText
              : styles.animateOutCenteredText
          }`}
        >
          {title}
        </div>
        <div
          className={`${styles.subTitle} ${
            isVisible
              ? styles.animateonvisiblesubTitle
              : styles.animateOutSubTitle
          }`}
        >
          {subTitle}
        </div>
      </div>
    </Box>
  );
};

export default VitaPages;

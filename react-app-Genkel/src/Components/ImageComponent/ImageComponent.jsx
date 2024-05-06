import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import styles from "./ImageComponent.module.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageComponent = ({ ImageComponentProps }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = ImageComponentProps?.imagePlus?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const getTextProps = () => {
    return ImageComponentProps?.ImageComponentTextProps.length === 1
      ? ImageComponentProps.ImageComponentTextProps[0]
      : ImageComponentProps.ImageComponentTextProps[
          activeStep % ImageComponentProps.ImageComponentTextProps.length
        ];
  };

  const handleClick = () => {
    const helper = getTextProps();
    if (helper.link == "") {
      window.location.href = `/projekte/${helper.title}`;
    } else {
      window.location.href = helper.link;
    }
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
        {ImageComponentProps?.imagePlus?.map((step, index) => (
          <div key={index}>
            <Box
              component="img"
              className={styles.imageBox}
              src={step.imageLink}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {getTextProps() != undefined &&(
      <div className={styles.textContent}>
        
        <div className={styles.uperTitle}>
          {getTextProps()?.link == "-1" ? (
            getTextProps().title
          ) : (
            <a style={{ cursor: "pointer" }} onClick={handleClick}>
              {getTextProps().title}
            </a>
          )}
        </div>
        <div className={styles.centeredText}>
          {getTextProps().link == "-1" ? (
            getTextProps().location
          ) : (
            <a style={{ cursor: "pointer" }} onClick={handleClick}>
              {getTextProps().location}
            </a>
          )}
        </div>
        <div className={styles.subTitle}>
          {getTextProps().link == "-1" ? (
            getTextProps().partner
          ) : (
            <a style={{ cursor: "pointer" }} onClick={handleClick}>
              {getTextProps().partner}
            </a>
          )}
        </div>
      </div>
    )}
     { ImageComponentProps && ImageComponentProps.imagePlus && ImageComponentProps.imagePlus[activeStep] && ImageComponentProps.imagePlus[activeStep].photoBy && (
  <div className={styles.PhotoBy}>
    Foto: {ImageComponentProps.imagePlus[activeStep].photoBy}
  </div>
)}


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
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          color: "white",
          backgroundColor: "transparent",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default ImageComponent;

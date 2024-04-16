import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'; // Use IconButton for direct icon interaction
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import styles from './SlideshowTeam.module.css';
import { Link } from 'react-router-dom'; // Make sure you've installed react-router-dom

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const SlideshowTeam = ({ overlay, isVisible, teamImages }) => {
    const images = [
        { imgPath: teamImages.ImageUrls[0], upperTitle: "", title: "Unser Team", subTitle: "", buttonText: "", link: "/Vita-Iris" },
        { imgPath: teamImages.ImageUrls[1], upperTitle: "", title: "Iris", subTitle: "Friseurmeisterin", buttonText: "Vita Iris", link: "/Vita-Iris" },
        { imgPath: teamImages.ImageUrls[2], upperTitle: "", title: "Sabine", subTitle: "Friseurmeisterin", buttonText: "Vita Sabine", link: "/Vita-Sabine" },
        { imgPath: teamImages.ImageUrls[3], upperTitle: "", title: "Ilona", subTitle: "Friseurmeisterin & Fotografin", buttonText: "Vita Ilona", link: "/Vita-Ilona" },
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps); // Wrap to the first image when reaching the end
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps); // Wrap to the last image when going back from the first
    };

    return (
        <Box className={styles.slideshowContainer}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={setActiveStep}
                enableMouseEvents
                interval={5000}
            >
                {images.map((step, index) => (
                    <div key={index}>
                        <Box
                            component="img"
                            className={`${styles.imageBox}`}
                            src={step.imgPath}
                            alt={`Image ${index}`}
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
                        sx={{ backgroundColor: 'transparent', width: 'auto' }}
                    />
                </Box>
                <IconButton
                    onClick={handleBack}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 16,

                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                        fontSize: '2rem',
                    }}
                >
                    <KeyboardArrowLeft fontSize="inherit" />
                </IconButton>
                <IconButton
                    onClick={handleNext}

                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 16,

                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                        fontSize: '2rem',
                    }}
                >
                    <KeyboardArrowRight fontSize="inherit" />
                </IconButton>

            </div>



            <div className={styles.textContent}>

                <div
                    className={`${styles.uperTitle} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                >
                    {images[activeStep].upperTitle}
                </div>
                <div
                    className={`${styles.centeredText} ${isVisible ? styles.animateonvisiblecenteredText : styles.animateOutCenteredText}`}
                >
                    {images[activeStep].title}
                </div>
                <div
                    className={`${styles.subTitle} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                >
                    {images[activeStep].subTitle}
                </div>
                {(activeStep != 0) &&
                    <Link
                        to={images[activeStep].link}
                        className={`${styles.buttonBelow} ${isVisible ? styles.animateonvisiblebuttonBelow : styles.animateOutButtonBelow}`}
                    >
                        <span>{images[activeStep].buttonText}</span>
                    </Link>
                }
            </div>
            <div className={styles.PhotoBy}>Foto: Ilona Scheffbuch</div>
        </Box >
    );
}

export default SlideshowTeam;

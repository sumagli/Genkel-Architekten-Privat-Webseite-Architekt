import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './MainPage.module.css';
import LogoGesicht1 from '../../Assats/Images/LogoGesicht1.png';
import LogoGesicht2 from '../../Assats/Images/LogoGesicht2.png';
import LogoGesicht3 from '../../Assats/Images/LogoGesicht3.png';
import test from '../../Assats/Images/5dark.jpg';
import Typography from '@mui/material/Typography';
import { useVacationMessage, useMainPageImages } from '../../Helper/service.ts';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MainPage = ({ isVisible, blur }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const vacationMessage = useVacationMessage();
    const { ImageUrls } = useMainPageImages();



    return (
        <Box className={styles.slideshowContainer}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                            src={imageUrl}
                            alt={`Image ${index}`}

                        />
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <div className={styles.textContent}>
                <Box
                    component="img"
                    className={`${styles.icons} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                    src={LogoGesicht1}
                    alt={`test`}

                />

                <div
                    className={`${styles.uperTitle} ${isVisible ? styles.animateonvisibleuperTitle : styles.animateOutUperTitle}`}
                >
                    {"Ihr Friseur in Stuttgart Ost"}
                </div>
                <div
                    className={`${styles.centeredText} ${isVisible ? styles.animateonvisiblecenteredText : styles.animateOutCenteredText}`}
                >
                    {"Haar Zwei Ooh!"}
                </div>
                <div
                    className={`${styles.subTitle} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                >
                    {"... für den eigenen Kopf"}
                </div>

                <div>
                    <Box
                        component="img"
                        className={`${styles.icons} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                        src={LogoGesicht2}
                        alt={`test`}
                        style={{ marginRight: '5%' }} // Inline style to set size
                    />

                    <Box
                        component="img"
                        className={`${styles.icons} ${isVisible ? styles.animateonvisiblesubTitle : styles.animateOutSubTitle}`}
                        src={LogoGesicht3}
                        alt={`test`}

                    />
                </div>

            </div>
            <div className={styles.PhotoBy}>Foto: Ilona Scheffbuch</div>
            {vacationMessage.showMessage &&
                <Box
                    className={styles.vacationBox}
                >
                    <Typography variant="body1" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {vacationMessage.message}
                    </Typography>
                </Box>
            }
        </Box>
    );
}

export default MainPage;

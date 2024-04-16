import styles from './Directions.module.css';
import "../../Assats//Fonts/Fonts.css"



export default function Directions() {


    return (
        <div className={styles.Directions}>
            <h1>Anfahrt</h1>

            <div className={styles.DirectionsBody}>
                <p>
                    <h2>Hackstraße 22, 70190 Stuttgart</h2>
                    Unser Salon ist optimal mit öffentlichen Verkehrsmitteln erreichbar.
                    Fahren Sie hierfür mit den Linien U1, U2, U4, U9 oder U14 bis zur Haltestelle Stöckach.
                    Vom Hauptbahnhof Stuttgart erreichen Sie uns in nur 5 Minuten.
                </p>

                <iframe
                    title="Shop Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.5871701052614!2d9.19841218789161!3d48.78913612272006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c4d0a0f5a577%3A0x5f17f062be8e74b7!2sHaar%20Zwei%20Ooh*21%20Fris%C3%B6rgesch%C3%A4ft!5e0!3m2!1sde!2sde!4v1701267586767!5m2!1sde!2sde"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>
    );
}

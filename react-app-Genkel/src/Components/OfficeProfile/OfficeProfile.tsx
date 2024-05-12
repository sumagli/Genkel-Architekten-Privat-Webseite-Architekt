import React from "react";
import styles from "./OfficeProfile.module.css";
import NewFooter from "../NewFooter/NewFooter";
import { useOfficeProfile } from "../../Helper/service";
import { Helmet } from "react-helmet";

// Define the structure of each profile item
interface ProfileSection {
  headline: string;
  text: string;
}

const OfficeProfile: React.FC = () => {
  const profile: ProfileSection[] = useOfficeProfile();

  return (
    <div>
      <div className={styles.officeProfileContainer}>
        <Helmet>
          <title>Büroprofil - Genkel Architekten</title>
          <meta
            name="description"
            content="Erfahren Sie mehr über die angebotenen Leistungen von Genkel Architekten. Wir übernehmen die Leistungsphasen 6 und 7 für Sie."
          />
          <meta
            name="keywords"
            content="Genkel Architekten, Büroprofil, Architekturdienstleistungen, Ausschreibung, Vergabe Stuttgart"
          />
        </Helmet>
        <h1>Genkel Architekten - Büroprofil</h1>
        {profile.map((section: ProfileSection, index: number) => (
          <section
            key={index}
            className={styles.serviceSection}
            style={{ animationDelay: `${index * 0.5}s` }} // Add delay based on index
          >
            <h2>{section.headline}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
      {profile[0]?.headline && <NewFooter mainPage={false} />}
    </div>
  );
};

export default OfficeProfile;

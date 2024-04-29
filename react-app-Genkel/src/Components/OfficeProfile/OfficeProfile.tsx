import React from "react";
import styles from "./OfficeProfile.module.css";
import NewFooter from "../NewFooter/NewFooter";
import { useOfficeProfile } from "../../Helper/service";

// Define the structure of each profile item
interface ProfileSection {
  headline: string;
  text: string;
}

const OfficeProfile: React.FC = () => {
  const profile = useOfficeProfile();

  return (
    <div>
      <div className={styles.officeProfileContainer}>
        <h1>Genkel Architekten - Büroprofil</h1>
        {profile.map((section: ProfileSection, index: number) => (
          <section key={index} className={styles.serviceSection}>
            <h2>{section.headline}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
};

export default OfficeProfile;

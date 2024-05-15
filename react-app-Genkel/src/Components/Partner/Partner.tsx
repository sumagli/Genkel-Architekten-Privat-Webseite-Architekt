import React from "react";
import styles from "./Partner.module.css";
import NewFooter from "../NewFooter/NewFooter";
import { usePartners } from "../../Helper/service";
import { Helmet } from "react-helmet";

export interface Partner {
  name: string;
  contacts: string[];
  phone: string;
  website?: string;
  projects?: string;
}

export interface Friends {
  name: string;
  website?: string;
}

export interface PartnerProps {
  partners: Partner[];
  friends: Friends[];
}

export default function Partner() {
  const { partners, friends } = usePartners(); // Assume it returns { partners, friends }

  return (
    <div>
      <div className={styles.partner}>
        <Helmet>
          <title>Partner - Genkel Architekten</title>
          <meta
            name="description"
            content="Entdecken Sie die Partner mit denen Genkel Architekten zusammengearbeitet hat. Unsere Partnerseite bietet eine Übersicht über wichtige Kooperationen und gemeinsame Projekte."
          />
          <meta
            name="keywords"
            content="Genkel Architekten, Architekturpartnerschaften, Bauwesen, Kooperationen, Partnerfirmen, Stuttgart"
          />
        </Helmet>
        <h1>Referenzen & Kontakte</h1>
        {partners.map((partner, index) => (
          <div
            key={index}
            className={styles.partnerItem}
            style={{
              animationName: index < 6 ? styles.fadeIn : styles.fadeInGroup,
              animationDelay: index < 6 ? `${index * 0.3}s` : "1.8s",
            }}
          >
            <h2>{partner.name}</h2>
            {partner.contacts.map((contact, i) => (
              <p key={i}>{contact}</p>
            ))}
            <p>Telefon: {partner.phone}</p>
            {partner.projects && <p>Projekt: {partner.projects}</p>}
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
          </div>
        ))}
        {friends[0]?.name && (
          <h1 className={styles.friends}>Freunde & Partner</h1>
        )}
        {friends.map((friend, index) => (
          <div key={index} className={styles.partnerItem}>
            <h2>{friend.name}</h2>
            {friend.website && (
              <a
                href={friend.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
          </div>
        ))}
      </div>
      {partners[0]?.name && <NewFooter mainPage={false} />}
    </div>
  );
}

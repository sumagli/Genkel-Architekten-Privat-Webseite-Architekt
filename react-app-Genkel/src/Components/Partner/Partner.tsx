import React from "react";
import styles from "./Partner.module.css";
import NewFooter from "../NewFooter/NewFooter";
import { usePartners } from "../../Helper/service";

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
  partners: Partner[]; // Adjusted to be an array of Partner
  friends: Friends[];
}

export default function Partner() {
  const { partners, friends } = usePartners() as PartnerProps; // Assuming usePartners returns an object of type PartnerProps

  return (
    <div>
      <div className={styles.partner}>
        <h1>Referenzen & Kontakte</h1>
        {partners.map(
          (
            partner,
            index // Loop through partners array
          ) => (
            <div key={index} className={styles.partnerItem}>
              <h2>{partner.name}</h2>
              {partner.contacts.map((contact, i) => (
                <p key={i}>{contact}</p>
              ))}
              <p>Telefon: {partner.phone}</p>
              {partner.projects && <p>Projekt: {partner.projects}</p>}
              {partner.website && <a href={partner.website}>Website</a>}
            </div>
          )
        )}

        <h1 className={styles.friends}>Freunde & Partner</h1>
        {friends.map((friends, index) => (
          <div key={index} className={styles.partnerItem}>
            <h2>{friends.name}</h2>
            {friends.website && <a href={friends.website}>Website</a>}
          </div>
        ))}
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

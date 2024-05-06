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

const a = [
  {
    name: "Behnisch Architekten, Stuttgart",
    contacts: [
      "Herr Stefan Behnisch",
      "Herr Jörg Usinger",
      "Herr Stefan Rappold",
    ],
    phone: "0711 – 607720",
    website: "https://behnisch.com/",
  },
  {
    name: "HWRl Architekten, Dortmund",
    contacts: ["Herr Gunnar Ramsfjell"],
    phone: "0231 – 97665-0",
  },
  {
    name: "haascookzemmrich, Stuttgart",
    contacts: ["Herr Martin Haas", "Herr David Cook"],
    phone: "0711 – 22936260",
  },
  {
    name: "Aldinger & Aldinger Architekten, Stuttgart",
    contacts: ["Herr Prof. Jörg Aldinger"],
    phone: "0711 – 976780",
    projects: ["Projekt: BA Ravensburg"],
  },
  // Add more partners here...
];

export default function Partner() {
  const partners: Partner[] = usePartners();

  return (
    <div>
      <div className={styles.partner}>
        <h1>Partner & Kontakte</h1>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerItem}>
            <h2>{partner.name}</h2>
            {partner.contacts.map((contact, i) => (
              <p key={i}>{contact}</p>
            ))}
            <p>Telefon: {partner.phone}</p>
            {partner.projects && <p>{partner.projects}</p>}
            {partner.website && <a href={`${partner.website}`}>Website</a>}
          </div>
        ))}
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

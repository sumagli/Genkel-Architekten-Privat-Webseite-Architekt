import React from "react";
import styles from "./OfficeProfile.module.css";
import NewFooter from "../NewFooter/NewFooter";

export default function OfficeProfile() {
  return (
    <div>
      <div className={styles.officeProfileContainer}>
        <h1>Genkel Architekten - Büroprofil</h1>
        <section className={styles.serviceSection}>
          <h2>Unsere Leistungen und Ziele</h2>
          <p>
            Genkel Architekten hat sich in den letzten 20 Jahren hauptsächlich
            auf Objektüberwachung und Ausschreibung für private und öffentliche
            Bauherren spezialisiert. Aus einem kleinen Team hat sich ein Büro
            entwickelt, das ich nun alleine führe, unterstützt durch ein
            umfangreiches Netzwerk für Arbeitsspitzen, mit Fokus auf den
            Leistungsphasen 6 und 7 der HOAI.
          </p>
          <p>
            Nach einer Ausbildung zum Sachverständigen für Gebäudeschäden konnte
            ich meine umfangreiche Baustellenerfahrung mit theoretischem Wissen
            verknüpfen, um unsere Prozesse in der Ausschreibung und
            Projektsteuerung zu verbessern, mit dem Ziel, Fehler in Planung und
            Ausführung zu minimieren.
          </p>
        </section>

        <section className={styles.expertiseSection}>
          <h2>Fachkompetenz und Spezialisierung</h2>
          <p>
            Unser Büro zeichnet sich in den oberen Leistungsphasen der HOAI aus,
            mit einem Schwerpunkt auf Ausschreibung, Bauleitung sowie Kosten-
            und Terminmanagement. Dabei gewährleisten wir, dass diese Aspekte in
            Einklang mit hervorragender Architektur stehen. Wir legen ebenfalls
            einen Fokus auf die Sanierung von Gebäuden und decken für diese
            Projekte alle Phasen ab.
          </p>
          <p>
            Für alle Vorhaben erstellen wir maßgeschneiderte Konzepte nach den
            Vorgaben der Bauherren und spezifischen Anforderungen der Projekte,
            wobei wir Termine und Budgets mit unserer jahrzehntelangen Erfahrung
            sorgfältig abwägen.
          </p>
        </section>

        <section className={styles.projectsSection}>
          <h2>Projektmanagement und Vorgehensweise</h2>
          <p>
            Unser proaktiver Ansatz, Probleme frühzeitig zu identifizieren und
            lösungsorientiert zu arbeiten, spiegelt sich in der Zufriedenheit
            unserer Auftraggeber und der Qualität unserer Gebäude wider. Wir
            sind stolz darauf, dynamisch auf der Baustelle zu agieren und nicht
            abzuwarten, was detaillierte Planungs- und Ausführungsphasen
            sicherstellt.
          </p>
          <p>
            Unser Projektportfolio umfasst von kleinen bis hin zu komplexen
            Projekten in der Größenordnung von bis zu 200 Millionen Euro.
          </p>
        </section>

        <section className={styles.innovationSection}>
          <h2>Innovation in der Kostenkalkulation</h2>
          <p>
            Wir nutzen unsere über 20 Jahre gesammelten eigenen Daten sowie
            Datenbanken wie das Standardleistungsbuch, um so umfassende
            Leistungsverzeichnisse zu erstellen. Die Schnittstelle zu den
            planenden Büros wird über projektbezogene Fragelisten eng geführt,
            um Kosten- und Ausschreibungssicherheit zu gewährleisten.
          </p>
        </section>
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

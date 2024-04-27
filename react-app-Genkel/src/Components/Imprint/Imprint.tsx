import React from "react";
import styles from "./Imprint.module.css";
import "../../Assats//Fonts/Fonts.css";
import NewFooter from "../NewFooter/NewFooter";

export default function Imprint() {
  return (
    <div className={styles.Background}>
      <div className={styles.imprint}>
        <h1>Kontakt/Impressum</h1>
        <div>
          <h2> Angaben gem. § 5 TMG:</h2>
          <p>
            GENKEL ARCHITEKTEN <br />
            Heinrich-Baumann-Straße 7b <br />
            70190 Stuttgart <br />
          </p>

          <h2> Vertreten durch:</h2>
          <p>Jörn Genkel</p>

          <h2> Kontakt:</h2>
          <p>E-Mail: genkel@genkelarchitekten.com</p>

          <h2> Registereintrag:</h2>
          <p>
            Mitglied der Architektenkammer <br />
            baden Württemberg <br />
            seit dem 13.11.2002 <br />
            Mitgliedsnummer: 069017
          </p>

          <h2> Umsatzsteuer:</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:{" "}
            <br /> DE 227814840
          </p>

          <h2> Haftung für Inhalte:</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. <br /> Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <h2> Haftung für Links:</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. <br /> Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2> Urheberrecht:</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. <br /> Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
            als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
      <NewFooter mainPage={false} />
    </div>
  );
}

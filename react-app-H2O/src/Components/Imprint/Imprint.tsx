import React from 'react';
import styles from './Imprint.module.css';
import "../../Assats//Fonts/Fonts.css"
import NewFooter from '../NewFooter/NewFooter';


export default function Imprint() {
    return (
        <div className={styles.Background}>
            <div className={styles.imprint}>
                <h1>Impressum</h1>
                <div className={styles.TopPart}>
                    <div className={styles.Iris}>
                        <div>
                            <h2>Vertreten durch:</h2>
                            <p>Iris Eiblmeier</p>
                        </div>

                        <div>
                            <h2>Umsatzsteuer-IdNr.</h2>
                            <p>
                                93054/60221 <br />

                                zuständiges Finanzamt <br />

                                Stuttgart

                            </p>
                        </div>
                        <div>
                            <h2>Adresse:</h2>
                            <p>
                                Hackstsraße 22<br />
                                70190 Stuttgart
                            </p>
                        </div>


                        <div>
                            <h2>Kontakt:</h2>
                            <p>
                                Telefon: 0711 - 262 99 66<br />
                            </p>
                        </div>

                        <div>
                            <h2>Handwerkskammer:</h2>
                            <p>
                                Mitglied  <br />
                                Handwerkskammer  <br />
                                Stuttgart seit 1999
                            </p>
                        </div>
                    </div>

                    <div className={styles.Sabine}>
                        <div>
                            <h2>Vertreten durch:</h2>
                            <p>Sabine Gehlen</p>
                        </div>
                        <div>
                            <h2>Umsatzsteuer-IdNr.</h2>
                            <p>
                                folgt <br />

                                zuständiges Finanzamt <br />

                                Stuttgart

                            </p>
                        </div>
                        <div>
                            <h2>Adresse:</h2>
                            <p>

                                Hackstsraße 22<br />
                                70190 Stuttgart
                            </p>
                        </div>

                        <div>
                            <h2>Kontakt:</h2>
                            <p>
                                Telefon: 0711 - 262 99 66<br />
                            </p>
                        </div>

                        <div>
                            <h2>Handwerkskammer:</h2>
                            <p>
                                Mitglied  <br />
                                Handwerkskammer  <br />
                                Stuttgart seit 1999
                            </p>
                        </div>
                    </div>
                </div>


                <div>
                    <h1>Haftungsausschluss</h1>
                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <h2>Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                    </p>
                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                    <p>
                        Wir möchten ausdrücklich betonen, dass wir keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten hat. Deshalb distanzieren wir uns hiermit von allen Inhalten aller gelinkten Seiten auf der Website www.haarzweiooh.com. Diese Erklärung gilt für alle auf unserer Homepage angezeigten Links und für alle Inhalte der Seiten, zu denen die bei uns sichtbaren Banner, Buttons und Links gegebenenfalls führen. Erstellung website: www.poolarserver.com www.genkelarchitekten.com
                    </p>
                </div>


            </div>
            <NewFooter mainPage={false} />
        </div>
    );
}


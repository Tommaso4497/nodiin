import React from "react";
import styles from "../../styles/Policy.module.css";

const CookiePolicy = () => {
  return (
    <div className={styles.wrapperPolicy}>
      <h1 className={styles.title}> Cookie Policy</h1>
      <h4 className={styles.subtitle}>Data effettiva: 29-Set-2023</h4>
      <h4 className={styles.subtitle}>Last Updated: 29-Set-2023</h4>
      <h4>Cosa sono i Cookie?</h4>
      <div>
        <p>
          La presente Politica sui cookie spiega cosa sono i cookie e come li
          utilizziamo, i tipi di cookie che utilizziamo, ovvero le informazioni
          che raccogliamo e come vengono utilizzate, e come gestire le
          impostazioni dei cookie.
        </p>
        <p>
          I cookie sono piccoli file di testo utilizzati per memorizzare piccole
          informazioni. Vengono memorizzati sul dispositivo dell&apos;utente
          quando il sito web viene caricato sul browser. Questi cookie ci
          aiutano a far funzionare correttamente il sito web, a renderlo più
          sicuro, a migliorare l&apos;esperienza dell&apos;utente, a capire come
          funziona il sito web, ad analizzare le sue prestazioni e ad analizzare
          cosa funziona e dove necessita di miglioramenti.
        </p>
      </div>
      &nbsp;
      <h4>Come usiamo i cookie?</h4>
      <div>
        <p>
          Come la maggior parte dei servizi online, il nostro sito web utilizza
          cookie di prima parte e di terze parti per diversi scopi. I cookie di
          prima parte sono necessari per il corretto funzionamento del sito web
          e non raccolgono dati personali.
        </p>
        <p>
          I cookie di terze parti utilizzati sul nostro sito web servono
          principalmente a capire come funziona il sito web, come si interagisce
          con il nostro sito web, mantenere i nostri servizi sicuri, fornire
          pubblicità che siano rilevanti per voi e, in generale, per offrirvi
          un&apos;esperienza utente migliore econtribuire a velocizzare le
          future interazioni con il nostro sito web.
        </p>
      </div>
      &nbsp;
      <h4>Tipi di Cookie che utilizziamo</h4>
      <div>Necessari</div>
      &nbsp;
      <div>
        <h4>Gestisci le preferenze sui cookie</h4>
        <a class="cky-banner-element">Preferenze Cookie</a> <br />
      </div>
      &nbsp;
      <div>
        <p>
          È possibile modificare le preferenze relative ai cookie in qualsiasi
          momento facendo clic sul tasto pulsante. In questo modo sarà possibile
          rivisitare il banner per il consenso ai cookie e cambiare le vostre
          preferenze o di ritirare subito il vostro consenso.
        </p>
        <p>
          Inoltre, i diversi browser offrono metodi diversi per bloccare ed
          eliminare i cookie utilizzati dai siti web. È possibile modificare le
          impostazioni del browser per bloccare/eliminare i cookie. Di seguito
          sono elencati i link ai documenti di supporto su come gestire ed
          eliminare i cookie dai principali browser web.
        </p>
        <p>
          Chrome:{" "}
          <a
          style={{wordBreak:"break-all"}}
            className="link"
            href="https://support.google.com/accounts/answer/32050"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/accounts/answer/32050
          </a>
        </p>
        <p>
          Safari:{" "}
          <a
            className="link"
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </a>
        </p>
        <p>
          Firefox:{" "}
          <a
            className="link"
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
          </a>
        </p>
        <p>
          Internet Explorer:{" "}
          <a
            className="link"
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
          </a>
        </p>
        <p>
          Se si utilizza un altro browser, consultare la documentazione
          ufficiale del browser. Documenti di supporto ufficiali del browser.
        </p>
      </div>
      &nbsp;
      <p>
        Cookie Policy Generated By{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes - Cookie Policy Generator.
        </a>
      </p>
      <div style={{ textAlign: "center" }}>
        <a
          className="link"
          rel="noopener noreferrer"
          href="https://nodiinchiacchierino.it"
        >
          TORNA ALLA HOME
        </a>
      </div>
    </div>
  );
};

export default CookiePolicy;

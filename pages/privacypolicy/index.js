import React from "react";
import style from "../../styles/Policy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={style.wrapperPolicy}>
      <h1 className={style.title}>Privacy Policy</h1>
      <h4 className={style.subtitle}>Ultimo aggiornamento 29-Set-2023</h4>
      <h4 className={style.subtitle}>Data effettiva 29-Set-2023</h4>

      <p>
        Questa Privacy Policy descrive le politiche di Nodi in Chiacchierino,
        Campobasso, Italy, <b>email: nodiinchiacchierino@gmail.com</b>,
        {/* phone: 3200980784 on the collection */} all&apos;uso e alla
        divulgazione delle vostre informazioni che raccogliamo quando utilizzate
        il nostro sito web ( nodiinchiacchierino.it ). (il
        &apos;Servizio&apos;). Accedendo o utilizzando il Servizio,
        l&apos;utente acconsente alla raccolta, all&apos;utilizzo e alla
        divulgazione delle delle vostre informazioni in conformità con la
        presente Informativa sulla privacy. Se non si acconsente allo stesso, si
        prega di non accedere o utilizzare il Servizio.
      </p>

      <p>
        Possiamo modificare la presente Informativa sulla privacy in qualsiasi
        momento senza alcun preavviso all&apos;utente e pubblicheremo
        l&apos;Informativa sulla privacy modificata sul Servizio. La Politica
        rivista sarà efficace dopo 180 giorni dalla data di pubblicazione della
        Politica rivista nel Servizio e l&apos;accesso o l&apos;uso continuato
        del Servizio da parte dell&apos;utente dopo tale termine costituirà
        l&apos;accettazione dell&apos;Informativa sulla privacy rivista.
        Pertanto raccomandiamo di rivedere periodicamente questa pagina.
      </p>

      <ul className={style.list}>
        <li>
          <span>
            <b>DIRITTI DELL&apos;INTERESSATO:</b> A seconda della legge applicabile,
            voi potete avere il diritto di accedere e di rettificare o
            cancellare i vostri dati personali o di ricevere una copia dei
            vostri dati personali, limitare o opporsi al trattamento attivo dei
            vostri dati, chiederci di condividere (portare) le vostre
            informazioni personali a un&apos;altra entità, revocare il consenso
            al trattamento dei vostri dati che ci avete fornito, il diritto di
            presentare un reclamo a un&apos;autorità legale e altri diritti che
            possono essere rilevanti ai sensi delle leggi applicabili. Per
            esercitare questi diritti, Potete scriverci a
            nodiinchiacchierino@gmail.com. Risponderemo alla vostra richiesta in
            in conformità con la legge applicabile.
          </span>

          <p>
            Si noti che se l&apos;utente non ci consente di raccogliere o
            elaborare le informazioni personali richieste o ritirate il consenso
            al trattamento delle stesse per gli scopi richiesti, potreste non
            essere in grado di accedere o utilizzare i servizi per i quali le
            vostre informazioni sono state richieste.
          </p>
        </li>
        <li>
          <span>
            <b>COOKIES: </b>
            Per saperne di più su come le utilizziamo e sulle vostre scelte in
            relazione a queste tecnologie di tracciamento, si prega di
            consultare la nostra{" "}
            <a className="link" href="nodiinchiacchierino.it/cookiepolicy">
              Cookie Policy.
            </a>
          </span>
        </li>
        <br />

        <li>
          <span>
            <b>SICUREZZA:</b>
            La sicurezza delle vostre informazioni è importante per noi e
            utilizzeremo misure di sicurezza ragionevoli per prevenire la
            perdita, l&apos;uso improprio o l&apos; alterazione non autorizzata
            delle vostre informazioni sotto il nostro controllo. Tuttavia,dati i
            rischi intrinseci, non possiamo garantire una sicurezza assoluta e
            di conseguenza, non possiamo assicurare o garantire la sicurezza di
            qualsiasi informazioni che ci trasmettete e lo fate a vostro rischio
            e pericolo
          </span>
        </li>

        <br />
        <li>
          <span>
            <b>LINK A TERZE PARTI E UTILIZZO DELLE INFORMAZIONI: </b>
            Il nostro Servizio può contenere collegamenti ad altri siti web che
            non sono gestiti da noi. Questa Privacy Policy non tratta la
            politica sulla privacy e le altre pratiche di terzi, compresi i
            terzi che gestiscono siti o servizi terze parti che gestiscono
            qualsiasi sito web o servizio accessibile tramite un link sul
            Servizio. Consigliamo vivamente di prendere visione
            dell&apos;informativa sulla privacy di ogni sito visitato. Non
            abbiamo alcun controllo e non ci assumiamo alcuna responsabilità per
            i contenuti, le politiche sulla privacy o le pratiche di qualsiasi
            sito o servizio di terzi.
          </span>
        </li>
        <br />

        <li>
          <span>
            <b>RECLAMI E RESPONSABILE DELLA PROTEZIONE DATI: </b>
            In caso di domande o dubbi sull&apos;elaborazione delle vostre
            informazioni che avete a disposizione, potete inviare un&apos;e-mail
            al nostro responsabile di Nodi in Chiacchierino, email:
            nodiinchiacchierino@gmail.com. Risponderemo alle vostre
            preoccupazioni in in conformità con la legge applicabile.
          </span>
        </li>
      </ul>
      <p>
        Privacy Policy generated with
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes.
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

export default PrivacyPolicy;

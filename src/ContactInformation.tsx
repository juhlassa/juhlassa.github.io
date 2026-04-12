import { Layout } from './components/Layout'
import { ContentImage } from './components/ContentImage'

const ContactInformation = () => {
  const content = (
    <div>
      <p>
        Meidät tavoittaa parhaiten sähköpostilla osoitteesta{' '}
        <a className="link" href="mailto:info@pramiatvadit.fi">
          info@pramiatvadit.fi
        </a>{' '}
        tai puhelimella numerosta{' '}
        <a className="link" href="tel:0405242071">
          040{'\u00a0'}524{'\u00a0'}2071
        </a>
        .
      </p>
      <p>
        Tuotteet sijaitsevat Ilmajoen keskustassa. Kuljetus on mahdollista
        korvausta vastaan.
      </p>
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.8203661954478!2d22.551243777720092!3d62.73406157643844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687cfea53f8b9c1%3A0xb1b9c7a82e65f7eb!2sLeinikintie%2012%2C%2060800%20Ilmajoki!5e0!3m2!1sfi!2sfi!4v1775940388221!5m2!1sfi!2sfi"
      ></iframe>
      <h2>Pramiat vadit syntyi rakkaudesta juhlaan</h2>
      <ContentImage url="/kuvat/virpi.jpg" maxWidth="300px" float={'right'} />
      <p>
        Rakastan juhlia, etenkin niiden suunnittelua. Leipominen ja kokkaaminen
        eivät kiinnosta, mutta herkkuja tilatessani niiden ulkonäkö on vähintään
        yhtä merkityksellinen kuin maku.
      </p>
      <p>
        Yksityiskohdat ovat tärkeitä. Niiden ei tarvtse varastaa huomiota, mutta
        toivon vieraan kokevan olonsa erityisen tervetulleeksi silloin, kun hän
        huomaa asian, joka saattaa muilta juhlijoilta jäädä noteeraamatta.
        Merkkipäivät eivät ole vain päivänsankarille, vaan vieraat tekevät
        juhlan.
      </p>
      <p>
        Kattauksessa ja pöytien koristelussa yksityiskohdat luovat
        kokonaisuuden. Astiaston, tarjoiluastioiden sekä koristeiden värejä ja
        tyylejä vaihtamalla juhlasta saa pienellä vaivalla loihdittua
        tilaisuuden, joka kuvastaa päivänsankarin persoonaa.
      </p>
      <p>
        Usein kyse on ideasta, jonka toteuttamiseen vaaditaan rahaa enemmän
        mielikuvitusta. Autan mielelläni suunnittelemaan kattaukset, jotka
        omalta osaltaan tekevät merkkipäivästä ainutlaatuisen.
      </p>
      <p>
        <b>Virpi Kupiainen-Ämmälä</b>
      </p>
    </div>
  )
  return <Layout pageTitle="Yhteystiedot" content={content} />
}

export default ContactInformation

import { Layout } from '../../components/Layout'
import { ContentImage } from '../../components/ContentImage'
import basicInfo from '../../basicInfo'

const Index = () => {
  const content = (
    <div>
      <p>
        Meidät tavoittaa parhaiten sähköpostilla osoitteesta{' '}
        <a className="link" href="mailto:pramiatvadit@gmail.com">
          pramiatvadit@gmail.com
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
        src={basicInfo.map}
      ></iframe>
      <h2>Pramiat vadit syntyi rakkaudesta juhlaan</h2>
      <p>
        Rakastan juhlia, etenkin niiden suunnittelua. Leipominen ja kokkaaminen
        eivät kiinnosta, mutta herkkuja tilatessani niiden ulkonäkö on vähintään
        yhtä merkityksellinen kuin maku.
      </p>
      <ContentImage url="/kuvat/virpi.jpg" maxWidth="300px" float={'right'} />
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
  return (
    <Layout
      pageTitle="Yhteystiedot"
      mediaImage="/kuvat/virpi.jpg"
      content={content}
    />
  )
}

export default Index

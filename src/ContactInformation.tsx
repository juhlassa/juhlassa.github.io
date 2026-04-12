import { Layout } from './components/Layout'
import { ContentImage } from './components/ContentImage'

const ContactInformation = () => {
  const content = (
    <div>
      <p>Meidät tavoittaa parhaiten sähköpostilla. Yhteystiedot alla.</p>
      <p>
        Tuotteet sijaitsevat Ilmajoen keskustassa. Kuljetus on mahdollista
        korvausta vastaan.
      </p>
      <iframe
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Leinikintie%2012&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
      <h2>Pramiat vadit syntyi rakkaudesta juhlaan</h2>
      <ContentImage url="/kuvat/virpi.jpg" maxWidth="300px" float={'right'} />
      <p>
        Rakastan juhlia, etenkin niiden suunnittelua. Leipominen ja kokkaaminen
        eivät minua kiinnosta, mutta herkkuja tilatessani niiden ulkonäkö on
        vähintään yhtä merkityksellistä kuin maku.
      </p>
      <p>
        Yksityiskohdat ovat tärkeitä. Niiden ei tarvtse varastaa huomiota, mutta
        toivon vieraan kokevan olonsa erityisen tervetulleeksi silloin, kun
        huomaa asian, joka saattaa muilta juhlijoilta jäädä noteeraamatta.
        Juhlat eivät ole vain päivänsakarille, vaan vieraat tekevät juhlan.
      </p>
      <p>
        Kattauksessa ja pöytien koristelussa yksityiskohdat luovat
        kokonaisuuden. Astiaston, tarjoiluastioiden sekä koristeiden värejä ja
        tyylejä vaihtamalla juhlasta saa pienellä vaivalla loihdittua
        tilaisuuden, joka kuvastaa päivänsankarin persoonaa.
      </p>
      <p>
        Usein kyse on ideasta, jonka toteuttamiseen vaaditaan rahaa enemmän
        mielikuvitusta. Autan sinua mielelläni suunnittelemaan kattaukset, jotka
        omalta osaltaan tekevät merkkipäivästäsi ainutlaatuisen.
      </p>
    </div>
  )
  return <Layout pageTitle="Yhteystiedot" content={content} />
}

export default ContactInformation

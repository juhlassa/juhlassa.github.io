import { Layout } from './components/Layout'
import {
  LeftContentImage,
  RightContentImage
} from './components/ContentImage.tsx'

const Terms = () => {
  return (
    <Layout
      pageTitle="Vuokraehdot"
      content={
        <div>
          <RightContentImage url="/kuvat/herkut.jpg" />
          <p>Voit tulla tutustumaan tuotteisiin etukäteen.</p>
          <p>
            Toivomme, että käsittelet vuokratuotteita yhtä hyvin kuin omiasi.
            Tavarat on palautettava siinä kunnossa, missä ne olivat
            noudettaessa. Kannattaa pakata tavarat hyvin, ettei niihin tule
            kuljetuksessa vaurioita. Tarkastamme tuotteet ennen vuokrausta ja
            sen jälkeen.
          </p>
          <p>
            Vuokra-aika on 5 vuorokautta, useimmiten torstaista maanantaihin.
            Jos tuotteet ovat vapaana, ne saa noutaa aikaisemmin tai palauttaa
            myöhemmin. Haku- ja nouto sovitaan sinulle sopivaan aikaan.
          </p>
          <LeftContentImage url="/kuvat/donitsiteline.jpg" />
          <p>Minimiostos on 20 €.</p>
          <p>
            Yli 100 euron vuokramaksusta laskutamme etukäteen varausmaksuna
            puolet loppusummasta. Laskun eräpäivä on kaksi viikkoa ennen
            vuokra-ajan alkua. Jos vuokraus perutaan sen jälkeen, varausmaksua
            ei palauteta.
          </p>
          <p>Jos tuotteet palautetaan likaisena, vuokramaksu tuplautuu.</p>
          <p>
            Jos tuote rikkoutuu, katoaa tai vaurioituu, asiakas on velvollinen
            maksamaan summa, jolla hankimme uuden, vastaavan tuotteen.
          </p>
          <p>
            Tuotteet sijaitsevat Ilmajoen keskustassa. Kuljetus on mahdollista
            korvausta vastaan.
          </p>
        </div>
      }
    />
  )
}

export default Terms

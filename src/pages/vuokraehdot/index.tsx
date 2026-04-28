import { Layout } from '../../components/Layout'
import {
  LeftContentImage,
  RightContentImage
} from '../../components/ContentImage'

const Index = () => {
  return (
    <Layout
      pageTitle="Vuokraehdot"
      description="Tutustu vuokraehtoihin – tiedot varauksesta, maksamisesta ja vastuista."
      mediaImage="/kuvat/brita.jpg"
      track={true}
      content={
        <div>
          <RightContentImage
            className="size-m"
            url="/kuvat/herkut.jpg"
            alt="Kerrostarjotin herkkuineen"
          />
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
          <LeftContentImage
            className="size-s"
            url="/kuvat/tarjottavat.jpg"
            alt="Tarjoiluvati täynnä naposteltavaa"
          />
          <p>Minimiostos on 20&nbsp;€.</p>
          <p>
            Laskun eräpäivä on kaksi viikkoa ennen vuokra-ajan alkua. Jos
            vuokraus perutaan sen jälkeen, maksua ei palauteta.
          </p>
          <p>Jos tuotteet palautetaan likaisena, vuokramaksu tuplautuu.</p>
          <p>
            Jos tuote rikkoutuu, katoaa tai vaurioituu, asiakas on velvollinen
            maksamaan summa, jolla hankimme uuden, vastaavan tuotteen.
          </p>
          <RightContentImage
            className="size-l"
            url={'/kuvat/brita.jpg'}
            alt={'Brita-kakku'}
          />
          <p>
            Hopean väriset astiat on tarkoitettu elin&shy;tarvike&shy;käyttöön,
            mutta niiden pinta vaurioituu helposti varsinkin silloin, jos ne
            ovat kosketuksessa kosteiden tarjottavien kanssa. Tämän takia
            herkkujen alla on käytettävä kakkupaperia tai muuta suojaa.
          </p>
          <p>
            Jalallisen, suorakaiteen muotoisen tarjottimen mukana saat neljä
            astiaan sopivaa muovitarjotinta, joilla on helppo nostaa esimerkiksi
            voileipäkakku paikalleen ja vaihtaa se nopeasti uuteen.
          </p>
          <p>
            Huomioithan, että tuotteet ovat salonkikelpoisia, mutta eivät uusia.
          </p>
        </div>
      }
    />
  )
}

export default Index

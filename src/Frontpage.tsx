import { LeftContentImage, RightContentImage } from './components/ContentImage'
import { Layout } from './components/Layout.tsx'

const Frontpage = () => {
  return (
    <Layout
      pageTitle="Vuokraa. Juhli. Palauta."
      content={
        <div>
          <p>
            <RightContentImage url="/kuvat/juhlapoyta.jpg" maxWidth={'300px'} />
            Onnea! Koska vierailet sivustollamme, sinulla on todennäköisesti
            aihetta juhlaan.
          </p>
          <p>
            Onnistuneet juhlat syntyvät vieraista, tunnelmasta ja
            huolettomuudesta. Juhlia on elämässä aivan liian vähän, mutta
            silloin kun kokoonnutaan yhteen, hyvä ruoka ja kaunis kattaus
            kruunaavat merkkihetket.
          </p>
          <LeftContentImage url="/kuvat/kuohuviinit.jpg" maxWidth={'300px'} />
          <p>
            Kuinka usein tarvitset kymmeniä lautasia, kahvikuppeja,
            kuohuviinilaseja tai kakkukupuja? Kaikkea ei tarvitse omistaa itse.
          </p>
          <p>
            Vuokraaminen on nykyaikainen tapa juhlia vastuullisesti. Laadukkaat
            astiat kiertävät tilaisuudesta toiseen, mikä vähentää turhaa
            kulutusta ja säästää luonnonvaroja.
          </p>
          <p>
            Sinun ei kannata hankkia tai säilyttää suuria määriä astioita ja
            muita juhlatarvikkeita vain yhtä päivää varten – saat kaiken
            tarvitsemasi juuri silloin kun tarvitset.
          </p>
          <p>
            Olipa kyseessä syntymäpäivät, ristiäiset, lakkiaiset tai muu juhla,
            autamme sinua luomaan toimivan ja kauniin kokonaisuuden. Halutessasi
            autamme sinua pöytien kattamisessa ja koristelussa.
          </p>
          <p>
            Jos pidät maalaisromanttisesta tyylistä ja prameista vadeista, olet
            oikeassa paikassa. Olet sydämellisesti tervetullut juhlimaan
            kanssamme!
          </p>
        </div>
      }
    />
  )
}

export default Frontpage

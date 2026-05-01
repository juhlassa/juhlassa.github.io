import { LeftContentImage, RightContentImage } from '../components/ContentImage'
import { Layout } from '../components/Layout'
import { basicInfo } from '../util'

const Index = () => {
  return (
    <Layout
      pageTitle={basicInfo.slogan}
      track={true}
      description="Astiavuokrausta Seinäjoen seudulla. Vuokraa astiat, kattaustarvikkeet ja koristeet helposti."
      mediaImage="/kuvat/juhlapoyta.jpg"
      content={
        <div>
          <p>
            <RightContentImage
              className="size-l"
              url="/kuvat/kuohuviinit.jpg"
              alt="Kuohuviinilasit"
            />
            Onnea! Koska vierailet sivustollamme, sinulla on todennäköisesti
            aihetta juhlaan.
          </p>
          <p>
            Onnistuneet juhlat syntyvät vieraista, tunnelmasta ja
            huolettomuudesta. Juhlia on elämässä aivan liian vähän, mutta
            silloin, kun kokoonnutaan yhteen, hyvä ruoka ja kaunis kattaus
            kruunaavat merkkihetket.
          </p>
          <p>
            Kuinka usein tarvitset kymmeniä lautasia, kahvikuppeja,
            kuohuviinilaseja tai kakkukupuja? Kaikkea ei tarvitse omistaa itse.
          </p>
          <p>
            Vuokraaminen on nykyaikainen tapa juhlia vastuullisesti. Laadukkaat
            astiat kiertävät tilaisuudesta toiseen, mikä vähentää turhaa
            kulutusta ja säästää luonnonvaroja.
          </p>
          <LeftContentImage
            className="size-m"
            url="/kuvat/juhlapoyta.jpg"
            alt="Juhlapöydän antimia"
          />
          <p>
            Sinun ei kannata hankkia tai säilyttää suuria määriä astioita ja
            muita juhlatarvikkeita vain yhtä päivää varten – saat kaiken
            tarvitsemasi juuri silloin kun haluat.
          </p>
          <p>
            Olipa kyseessä syntymäpäivät, ristiäiset, lakkiaiset tai muu juhla,
            autamme sinua luomaan toimivan ja kauniin kokonaisuuden.
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

export default Index

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
        Löydät meidät myös{' '}
        <a
          className="link underlined"
          href="https://www.instagram.com/pramiatvadit/"
        >
          Instagram
        </a>
        ista.
      </p>
      <p>
        Tuotteet sijaitsevat Etelä-Pohjanmaalla, Ilmajoen keskustassa noin 15 km
        päässä Seinäjoelta. Kuljetus on mahdollista korvausta vastaan.
      </p>
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={basicInfo.map}
      ></iframe>
      <h2>Pramiat vadit syntyi rakkaudesta astioihin ja juhlahumuun</h2>
      <p>
        Olen astiahullu. Jos säilytystilaa olisi enemmän, keräisin lukuisia
        tuotesarjoja ja vaihtelisin niitä kattauksissa mielialan ja vuodenajan
        mukaan.
      </p>
      <ContentImage
        url="/kuvat/virpi.jpg"
        alt="Virpi"
        styles={{ maxWidth: '300px', float: 'right' }}
      />
      <p>
        Kun rakensimme omakotitalon Ilmajoelle haaveilin isosta astiahuoneesta,
        mutta sitä ei valitettavasti saatu mahdutettua pohjapiirustukseen. Se on
        hieman rajoittanut keräilyharrastustani, mutta ei intoani näyttäviin
        kattauksiin.
      </p>
      <p>
        Onneksi kauniita astioita ja tarjoiluvateja ei tarvitse kätkeä kaappiin,
        vaan niitä voi käyttää myös sisustuksessa. Pidän
        maalais&shy;romanttisesta tyylistä. Tämä näkyy astianvuokrausyritykseni
        tuotevalikoimassa. Meiltä ei löydy huomaamattomia peruskuppeja, vaan
        tarjolla on silmäkarkkia. Astioita, jotka ovat osa juhlasomistusta ja
        visuaalista kokonaisuutta.
      </p>
      <p>
        Yrityksen nimen mukaan valikoimissa on tietenkin prameita vateja kuten
        erityisen kauniita ja korkeita kerrostarjottimia. Kyntteliköt ja
        kynttilälyhdyt on valittu niin, että ne sopivat täydellisesti yhteen
        tarjoiluastioiden kanssa.
      </p>
      <p>
        Kun kiinnostukseni astioihin ja sisustamiseen yhdistyy rakkauteni
        juhliin, idea astia- ja kattauspalveluyrityksestä tuntuu luonnolliselta
        jatkumolta harrastuksille.
      </p>
      <p>
        Juhlissa pidän erityisesti niiden suunnittelusta. Leipominen ja
        kokkaaminen eivät ole minun juttuni, mutta herkkujen ulkonäkö on
        vähintään yhtä merkityksellinen niiden kuin maku.
      </p>
      <p>
        Yksityiskohdat ovat itselleni tärkeitä. Kattauksessa ja pöytien
        koristelussa ne luovat kokonaisuuden. Niiden ei tarvitse varastaa
        huomiota, mutta toivon vieraan kokevan olonsa erityisen tervetulleeksi
        silloin, kun hän huomaa asian, joka saattaa muilta juhlijoilta jäädä
        noteeraamatta. Merkkipäivät eivät ole vain päivänsankarille, vaan
        vieraat tekevät juhlan.
      </p>
      <p>
        Astiaston, tarjoiluastioiden sekä koristeiden värejä ja tyylejä
        vaihtamalla juhlasta saa pienellä vaivalla loihdittua tilaisuuden, joka
        kuvastaa päivänsankarin persoonaa.
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
      description="Ota yhteyttä ja suunnitellaan haluamasi kokonaisuus yhdessä – saat henkilökohtaista palvelua astioiden ja tarvikkeiden vuokraukseen."
      mediaImage="/kuvat/virpi.jpg"
      track={true}
      content={content}
    />
  )
}

export default Index

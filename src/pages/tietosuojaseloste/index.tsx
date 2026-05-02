import { Layout } from '../../components/Layout'
import { basicInfo } from '../../util'

function PrivacyPolicy() {
  return (
    <Layout
      pageTitle="Tietosuojaseloste"
      content={
        <>
          <h2>Rekisterinpitäjä</h2>
          <p>
            {basicInfo.businessName}, {basicInfo.email}
          </p>
          <h2>Mitä tietoja keräämme</h2>
          <p>
            Keräämme tietoa sivustomme käytöstä analytiikan avulla. Näitä
            tietoja voivat olla esimerkiksi IP-osoite (anonymisoitu),
            selaintiedot, sivukäynnit ja vuorovaikutus sivuston kanssa.
          </p>
          <h2>Mihin tarkoitukseen tietoja käytetään</h2>
          <p>
            Tietoja käytetään sivuston käytön analysointiin ja palvelun
            kehittämiseen.
          </p>
          <h2>Analytiikka</h2>
          <p>
            Käytämme Google Analytics -palvelua, joka kerää tietoa sivuston
            käytöstä. Google voi käsitellä tietoja EU:n ulkopuolella.
          </p>
          <h2>Oikeusperuste</h2>
          <p>
            Tietojen käsittely perustuu käyttäjän antamaan suostumukseen.
            Suostumus on selainkohtainen.
          </p>
          <h2>Tietojen säilytysaika</h2>
          <p>Säilytämme analytiikkatietoja enintään 2 kuukautta.</p>
          <h2>Käyttäjän oikeudet</h2>
          <p>Käyttäjällä on oikeus:</p>
          <ul>
            <li>saada pääsy omiin tietoihinsa</li>
            <li>pyytää tietojen oikaisua tai poistamista</li>
            <li>peruuttaa suostumus milloin tahansa</li>
          </ul>
          <p>
            Koska analytiikkatiedot ovat pääosin pseudonyymejä, emme välttämättä
            pysty tunnistamaan yksittäistä käyttäjää pelkästään
            analytiikkatietojen perusteella. Tämän vuoksi kaikkia tarkastus- tai
            poistopyyntöjä ei voida toteuttaa yksilöidysti.
          </p>
          <h2>Yhteydenotot</h2>
          <p>
            Jos sinulla on kysyttävää tietosuojasta, voit ottaa yhteyttä:{' '}
            {basicInfo.email}.
          </p>
          <p>
            <button
              className="primary"
              onClick={() => {
                localStorage.setItem(basicInfo.consentStateKey, 'granted')
                window.location.assign('/')
              }}
            >
              Hyväksy ehdot
            </button>{' '}
            <button
              className="secondary"
              onClick={() => {
                localStorage.setItem(basicInfo.consentStateKey, 'denied')
                window.location.assign('/')
              }}
            >
              Hylkää
            </button>
          </p>
        </>
      }
      track={false}
    />
  )
}

export default PrivacyPolicy

import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { SharingButton } from '../../components/ShareButton'
import {
  clearFavourites,
  favouriteItemsByPath,
  useFavourites
} from '../../favourites'
import { humanReadableName, trackEvent } from '../../util'
import type { GroupedRentalItem } from '../../types'

const Index = () => {
  // Paths of removed items are left out
  const favourites = useFavourites().filter((path) =>
    favouriteItemsByPath.has(path)
  )
  const items: GroupedRentalItem[] = favourites.map((path) =>
    favouriteItemsByPath.get(path)!
  )

  // Each item's name and the link to its share page
  function shareText() {
    return favourites
      .map(
        (path) =>
          `${humanReadableName(favouriteItemsByPath.get(path)!.name)} - ${window.location.origin}${path}`
      )
      .join('\n')
  }

  return (
    <Layout
      pageTitle="Merkityt tuotteet"
      track={true}
      description="Merkitsemäsi tuotteet."
      mediaImage="/kuvat/juhlapoyta.jpg"
      content={
        <div>
          {items.length === 0 ? (
            <>
              <p>
                Voit merkitä vuokrattavaksi aiotut tuotteet helposti
                tuotesivuilta tuotekuvan päällä olevalla sydämellä. Samasta
                sydämestä voit myös poistaa merkinnän.
              </p>
              <p>
                Kun olet valmis, palaa tälle sivulle ja näet valittujen
                tuotteiden listan. Voit lähettää sen meille esimerkiksi
                sähköpostilla, niin saat varmasti ne tuotteet, joita tarvitset
                juhlissasi.
              </p>
            </>
          ) : (
            <>
              <p>
                Merkitsemäsi tuotteet ovat tallentuneet vain tähän selaimeen. Et
                voi jatkaa listan täydentämistä toisella koneella tai eri
                selaimella.
              </p>
              <p>
                Voit jakaa tai kopioida merkityt tuotteet leikepöydälle alla
                olevalla painikkeella. Pramiat Vadit saa tietää listan
                sisällöstä vain, jos lähetät sen meille.
              </p>
              <div className="buttons">
                <SharingButton
                  label="Jaa merkityt tuotteet"
                  share={() => {
                    const text = shareText()
                    return {
                      data: {
                        title: `Haluaisin vuokrata alla mainitut tuotteet\n`,
                        text
                      },
                      copyText: text,
                      params: { favourites: favourites.length }
                    }
                  }}
                />
                <button
                  type="button"
                  className="secondary small"
                  onClick={() => {
                    // Emptying can't be undone
                    if (
                      confirm('Tyhjennetäänkö merkittyjen tuotteiden lista?')
                    ) {
                      trackEvent('clear_favourites', {
                        favourites: favourites.length
                      })
                      clearFavourites()
                    }
                  }}
                >
                  Tyhjennä lista
                </button>
              </div>
              <h2>Vuokrattavaksi merkityt tuotteet</h2>
              <RentalItemsTable itemList={items} shareable={false} />
            </>
          )}
        </div>
      }
    />
  )
}

export default Index

import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { SharingButton } from '../../components/ShareButton'
import {
  clearFavourites,
  type Favourite,
  favouriteItemsByPath,
  favouritesListPath,
  listParam,
  parseFavouritesList,
  replaceFavourites,
  totalPrice,
  useFavourites
} from '../../favourites'
import {
  formatPrice,
  humanReadableName,
  trackEvent,
  unitName
} from '../../util'
import type { GroupedRentalItem } from '../../types'

function itemsOf(favourites: Favourite[]): GroupedRentalItem[] {
  return favourites.map(({ path }) => favouriteItemsByPath.get(path)!)
}

// Each item's name, quantity and the link to its share page, whose link
// preview shows the item, and a link to the whole list
function shareText(favourites: Favourite[]) {
  const { origin } = window.location
  const items = favourites.map(({ path, quantity }) => {
    const item = favouriteItemsByPath.get(path)!
    const count = quantity
      ? `, ${quantity} ${unitName(item.unit, quantity)}`
      : ''
    return `${humanReadableName(item.name)}${count} - ${origin}${path}`
  })
  return `${items.join('\n')}\n\nKoko lista: ${origin}${favouritesListPath(favourites)}`
}

function PriceTotal({ favourites }: { favourites: Favourite[] }) {
  const itemsWithoutPrice = itemsOf(favourites).filter((item) => !item.price)
  return (
    <p>
      <b>Hinta yhteensä {formatPrice(totalPrice(favourites))} €.</b>
      {itemsWithoutPrice.length > 0 && (
        <>
          <br />
          <span className="small-text">
            Hintaan eivät sisälly:{' '}
            {itemsWithoutPrice
              .map((item) => humanReadableName(item.name))
              .join(', ')}
          </span>
        </>
      )}
    </p>
  )
}

const Index = () => {
  const router = useRouter()
  const favourites = useFavourites()
  const items = itemsOf(favourites)
  // A list shared with a link is shown instead of the visitor's own
  const list = router.query[listParam]
  // Also a bare ?json, whose value is empty
  const shared =
    typeof list === 'string' ? parseFavouritesList(list) : undefined

  if (shared) {
    return <SharedList shared={shared} ownCount={favourites.length} />
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
                Voit jakaa tai kopioida merkityt tuotteet leikepöydälle alla
                olevalla painikkeella. Pramiat Vadit saa tietää listan
                sisällöstä vain, jos lähetät sen meille.
              </p>
              <PriceTotal favourites={favourites} />
              <p>
                Tuotteiden lukumäärän voit valita tuotteen kohdalta, jos niitä
                on saatavilla useampia. Tällä tavalla kokonaissumma lasketaan
                oikein.
              </p>
              <p className="warning small-text">
                Huom! Merkitsemäsi tuotteet ovat tallentuneet vain tähän
                selaimeen. Et voi jatkaa listan täydentämistä toisella koneella
                tai eri selaimella.
              </p>
              <div className="buttons">
                <SharingButton
                  label="Jaa merkityt tuotteet"
                  share={() => {
                    const text = shareText(favourites)
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
              <RentalItemsTable
                itemList={items}
                shareable={false}
                quantities={true}
              />
            </>
          )}
        </div>
      }
    />
  )
}

function SharedList({
  shared,
  ownCount
}: {
  shared: Favourite[]
  ownCount: number
}) {
  const router = useRouter()
  return (
    <Layout
      pageTitle="Jaettu lista"
      track={true}
      description="Sinulle jaettu lista vuokrattavista tuotteista."
      mediaImage="/kuvat/juhlapoyta.jpg"
      content={
        <div>
          <p>
            Tämä lista merkityistä tuotteista on jaettu sinulle. Voit tallentaa
            sen omaksi listaksesi ja jatkaa sen muokkaamista.
          </p>
          <PriceTotal favourites={shared} />
          <div className="buttons">
            <button
              type="button"
              className="secondary small"
              onClick={() => {
                if (
                  ownCount === 0 ||
                  confirm('Korvataanko oma listasi tällä listalla?')
                ) {
                  trackEvent('save_shared_favourites', {
                    favourites: shared.length
                  })
                  replaceFavourites(shared)
                  router.replace('/suosikit/')
                }
              }}
            >
              Tallenna omaksi listaksi
            </button>
          </div>
          <h2>Vuokrattavaksi merkityt tuotteet</h2>
          <RentalItemsTable
            itemList={itemsOf(shared)}
            shareable={false}
            fixedQuantities={Object.fromEntries(
              shared.map(({ path, quantity }) => [path, quantity])
            )}
          />
        </div>
      }
    />
  )
}

export default Index

import { Layout } from '../../components/Layout'
import { rentalItems } from '../../rentalItems'
import { humanReadableName } from '../../util'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { RentalItem } from '../../types'
import { useState } from 'react'

const searchableItems = rentalItems.map((item) => ({
  ...item,
  searchableName: humanReadableName(item.name)?.toLowerCase(),
  searchableDescription: humanReadableName(item.description)?.toLowerCase()
}))

const Index = () => {
  const [foundItems, setFoundItems] = useState<RentalItem[] | undefined>()

  function search() {
    const query =
      document
        .querySelector<HTMLInputElement>('input.query')
        ?.value.trim()
        .toLowerCase() ?? ''
    if (query.length < 3) {
      return setFoundItems(undefined)
    }
    const fromDescription =
      document.querySelector<HTMLInputElement>('input.fromDescription')
        ?.checked ?? false
    setFoundItems(searchableItems.filter((item) => match(item)))

    function match(
      item: RentalItem & {
        searchableName: string | undefined
        searchableDescription: string | undefined
      }
    ) {
      if (fromDescription && item.searchableDescription?.includes(query)) {
        return true
      }
      return item.searchableName?.includes(query)
    }
  }

  return (
    <Layout
      pageTitle="Hae vuokrattavia tavaroita"
      track={true}
      description="Astiavuokrausta Seinäjoen seudulla. Löydä astiat, kattaustarvikkeet ja koristeet helposti."
      mediaImage="/kuvat/juhlapoyta.jpg"
      content={
        <div>
          <input
            className="query"
            placeholder="Kirjoita Hakusana tähän (väh. 3 kirjainta)"
            onInput={() => search()}
          />
          <label>
            <input
              type="checkbox"
              className="fromDescription"
              onClick={() => search()}
            />
            Hae myös kuvauksesta
          </label>
          {foundItems != undefined && <p>Löytyi {foundItems.length} osumaa.</p>}
          <RentalItemsTable itemList={foundItems} />
        </div>
      }
    />
  )
}

export default Index

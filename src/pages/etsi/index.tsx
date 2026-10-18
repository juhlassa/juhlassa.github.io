import { Layout } from '../../components/Layout'
import { rentalItems } from '../../rentalItems'
import { humanReadableName } from '../../util'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { GroupedRentalItem } from '../../types'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const searchableItems = rentalItems.map((item) => ({
  ...item,
  searchableName: humanReadableName(item.name)?.toLowerCase(),
  searchableBrand: humanReadableName(item.brand)?.toLowerCase(),
  searchableDescription: humanReadableName(item.description)?.toLowerCase()
}))

function findItems(
  rawQuery: string,
  fromDescription: boolean
): GroupedRentalItem[] | undefined {
  const query = rawQuery.trim().toLowerCase()
  if (query.length < 3) {
    return undefined
  }
  return searchableItems.filter(
    (item) =>
      (fromDescription && item.searchableDescription?.includes(query)) ||
      item.searchableName?.includes(query) ||
      item.searchableBrand?.includes(query)
  )
}

const Index = () => {
  const router = useRouter()
  const queryField = useRef<HTMLInputElement>(null)
  const fromDescriptionCheckbox = useRef<HTMLInputElement>(null)

  // The URL holds the search, so that shared links work
  const query = typeof router.query.q === 'string' ? router.query.q : ''
  const fromDescription = router.query.d === '1'
  const foundItems = findItems(query, fromDescription)

  // Fill the fields from a shared link (the query is known after hydration)
  useEffect(() => {
    if (
      router.isReady &&
      queryField.current &&
      fromDescriptionCheckbox.current
    ) {
      queryField.current.value = query
      fromDescriptionCheckbox.current.checked = fromDescription
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  function search() {
    const query = queryField.current?.value.trim() ?? ''
    const fromDescription = fromDescriptionCheckbox.current?.checked ?? false
    const params = new URLSearchParams()
    if (query.length >= 3) {
      params.set('q', query)
      if (fromDescription) {
        params.set('d', '1')
      }
    }
    const queryString = params.toString()
    router.replace(`/etsi/${queryString ? `?${queryString}` : ''}`, undefined, {
      shallow: true,
      scroll: false
    })
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
            ref={queryField}
            className="query"
            autoFocus={true}
            placeholder="Kirjoita Hakusana tähän (väh. 3 kirjainta)"
            onInput={() => search()}
          />
          <label>
            <input
              ref={fromDescriptionCheckbox}
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

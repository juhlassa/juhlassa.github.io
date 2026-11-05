import { toggleFavourite, useFavourites } from '../favourites'
import { trackEvent } from '../util'
import { HeartIcon } from './HeartIcon'

export function FavouriteButton({
  path,
  name
}: {
  path: string
  name: string
}) {
  const favourite = useFavourites().some((favourite) => favourite.path === path)

  return (
    <button
      type="button"
      className={`favourite ${favourite ? 'selected' : ''}`}
      aria-label={
        favourite
          ? `Poista keräilykorista: ${name}`
          : `Lisää keräilykoriin: ${name}`
      }
      aria-pressed={favourite}
      title={favourite ? 'Poista keräilykorista' : 'Lisää keräilykoriin'}
      onClick={() => {
        trackEvent(favourite ? 'unfavourite' : 'favourite', { path })
        toggleFavourite(path)
      }}
    >
      <HeartIcon outlined={true} />
    </button>
  )
}

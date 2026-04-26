import Link from 'next/link'
import type { NavigationItem } from '../types.ts'
import { navigation } from '../navigation'

export const TablesetsNavigation = ({ selected }: { selected: string }) => {
  const tablesets: NavigationItem[] = navigation.filter(
    (item: NavigationItem) => item.tableset
  )

  return (
    <>
      <span>Katso myös: </span>
      {tablesets
        .filter((item) => !item.route.includes(selected))
        .map((item) => (
          <Link
            key={item.name}
            className="item link underlined"
            href={item.route}
          >
            {item.name}
          </Link>
        ))}
    </>
  )
}

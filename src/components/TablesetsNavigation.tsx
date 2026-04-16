import Link from 'next/link'
import type { NavigationItem } from '../types.ts'
import { navigation } from '../navigation'

export const TablesetsNavigation = ({ selected }: { selected: string }) => {
  const tablesets: NavigationItem[] = navigation.filter(
    (item: NavigationItem) => item.tableset
  )

  return tablesets.map((item) => (
    <Link
      key={item.name}
      className={
        item.route.includes(selected) ? 'item link selected' : 'item link'
      }
      href={item.route}
    >
      {item.name}
    </Link>
  ))
}

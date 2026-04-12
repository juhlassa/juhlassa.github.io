import { Link } from 'react-router'
import { navigation } from '../index.tsx'
import type { NavigationItem } from '../types.ts'

export const TablesetsNavigation = ({ selected }: { selected: string }) => {
  const tablesets = navigation.filter((item: NavigationItem) => item.tableset)

  return tablesets.map((item) => (
    <Link
      key={item.name}
      className={
        item.route.includes(selected) ? 'item link selected' : 'item link'
      }
      to={item.route}
    >
      {item.name}
    </Link>
  ))
}

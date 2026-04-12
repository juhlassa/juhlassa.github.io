import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Frontpage from './Frontpage.tsx'
import Vanilja from './Vanilja.tsx'
import GreenGate from './GreenGate.tsx'
import Serving from './Serving.tsx'
import Glasses from './Glasses.tsx'
import TableClothing from './TableClothing.tsx'
import Decorating from './Decorating.tsx'
import Other from './Other.tsx'
import Terms from './Terms.tsx'
import ContactInformation from './ContactInformation.tsx'
// @ts-expect-error Cannot find module or type declarations for side-effect import of @fontsource/varela-round
import '@fontsource/varela-round'
import './assets/styles.css'
import type { NavigationItem } from './types.ts'

export const navigation: NavigationItem[] = [
  {
    route: '/',
    name: '<img src="/kuvat/koti.png" alt="Koti" class="home">',
    element: <Frontpage />
  },
  { route: '/astiastot', name: 'Astiastot', element: <Vanilja /> },
  { route: '/vanilja', name: 'Vanilja', element: <Vanilja />, tableset: true },
  {
    route: '/greengate',
    name: 'Green Gate',
    element: <GreenGate />,
    tableset: true
  },
  { route: '/tarjoilu', name: 'Tarjoilu', element: <Serving /> },
  { route: '/lasit', name: 'Lasit', element: <Glasses /> },
  { route: '/poytaliinat', name: 'Pöytäliinat', element: <TableClothing /> },
  { route: '/koristelu', name: 'Koristelu', element: <Decorating /> },
  { route: '/muut', name: 'Muut', element: <Other /> },
  { route: '/vuokraehdot', name: 'Vuokraehdot', element: <Terms /> },
  {
    route: '/yhteystiedot',
    name: 'Yhteystiedot',
    element: <ContactInformation />
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {navigation.map((item) => (
          <Route key={item.route} path={item.route} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

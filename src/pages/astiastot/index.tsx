import router from 'next/router'
import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    router.replace('/astiastot/vanilja')
  }, [])

  return null
}

export default Index

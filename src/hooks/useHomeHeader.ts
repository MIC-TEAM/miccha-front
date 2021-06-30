import { useEffect, useState } from 'react'

const useHomeHeader = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { scrollTop }
}

export default useHomeHeader

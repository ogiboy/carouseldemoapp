import { useState, useEffect, createContext, useContext } from 'react'

const ScreenSizeContext = createContext()

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext)
  return context
}

export const ScreenSizeProvider = ({ children }) => {
  const [width, setWidth] = useState(null)
  const [screenType, setScreenType] = useState('desktopHd')

  const updateScreenType = (width) => {
    if (width >= 2560) setScreenType('ultraHd')
    else if (1920 <= width && width <= 2559) setScreenType('desktopHd')
    else if (1441 <= width && width <= 1919) setScreenType('desktop')
    else if (1025 <= width && width <= 1440) setScreenType('widescreen')
    else if (769 <= width && width <= 1024) setScreenType('laptop')
    else if (481 <= width && width <= 768) setScreenType('tablet')
    else if (320 <= width && width <= 480) setScreenType('mobile')
  }

  useEffect(() => {
    const updateDimensions = () => {
      const currentWidth = window.innerWidth
      setWidth(currentWidth)
      updateScreenType(currentWidth)
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  console.log(width)
  return (
    <ScreenSizeContext.Provider value={{ width, screenType }}>
      {children}
    </ScreenSizeContext.Provider>
  )
}

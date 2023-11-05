"use client"

import Carousel from '@/components/Carousel'
import { ScreenSizeProvider, useScreenSize } from '@/components/ScreenContext'

const ResponsiveCarousel = () => {
  const { screenType } = useScreenSize()
  return (
    <div className={`App ${screenType}`}>
      <h1>Carousel Demo</h1>
      <Carousel />
    </div>
  )
}

const App = () => {
  return (
    <ScreenSizeProvider>
      <ResponsiveCarousel />
    </ScreenSizeProvider>
  )
}
export default App

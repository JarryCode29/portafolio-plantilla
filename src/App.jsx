import React from 'react'
import { Header } from './components/header/header'
import { AboutMe } from './components/aboutMe/aboutMe'
import { Jobs } from './components/whoIam/jobs'
import { Gallery } from './components/gallery/gallery'
import { Footer } from './components/footer/footer'

export const App = () => {
  return (
    <div>
        <Header />
        <AboutMe />
        <Jobs />
        <Gallery />
        <Footer/>
    </div>
  )
}

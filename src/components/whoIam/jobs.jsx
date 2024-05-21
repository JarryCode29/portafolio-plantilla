import React from 'react'
import laptop from '../../assets/Imagen/about-1.jpg'
import personWithLaptop from '../../assets/Imagen/about-2.jpg'
import {Buton} from'../buton'
import './jobs.css'
export const Jobs = () => {
  return (
    <section className='section-2'>
        <h2>Soy <b>Desarrollador web</b></h2>
        <div className='container-img'>
        <div className='img-laptop'>
            <img src={personWithLaptop} alt="Imagen de about 2" className='img-2' />
        </div>
        <div className='person-laptop'>
           <img src={laptop} alt="laptop" className='img-1'/>
        <Buton name='LEER MAS'/>
        </div>
        </div>
    </section>
  )
}

import React from 'react'
import CarouselComponent from './home/Carousel'
import CardContainer from './home/cardContainer'

const Index = () => {  
  return (
    <div className='bg-slate-100 dark:bg-zinc-900'>
    <CarouselComponent/>
    <CardContainer/>
    </div>
  )
}

export default Index
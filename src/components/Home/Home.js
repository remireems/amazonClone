import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import { useTheme } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import './Home.css'
import { useState } from 'react'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    title: 'amazonPrimeVideoPic',
    link: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
  },
  {
    title: 'amazonAlexaEchoDot',
    link: 'https://m.media-amazon.com/images/I/61lpWz5wudL._SX3000_.jpg'
  },
  {
    title: 'amazonFire7Kids',
    link: 'https://m.media-amazon.com/images/I/91QbQ7hgYHL._SX3000_.jpg'
  }
]

const Home = () => {

  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <div className='home'>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {images.map((step, index) => (
          <div key={step.title} className='homeCarousel'>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className='homeImg' src={step.link} alt={step.title} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <div className="homeRow">
        <Product
          id='1'
          title='Rachael Ray Cucina Nonstick Bakeware Set Baking Cookie Sheets Cake Muffin Bread Pan, 10 Piece, Latte Brown with Cranberry Red Grips'
          price={109.99}
          image='https://m.media-amazon.com/images/I/91E9pmUWQAL._AC_SL1500_.jpg'
          rating={5}
        />
        <Product
          id='2'
          title='Lopkey Artificial Daisy Flowers Outdoor Indoor Patio Lawn Garden Hanging Basket with Chain Flowerpot,10 inch Dark Purple'
          price={29.99}
          image='https://m.media-amazon.com/images/I/71v0CyDo3qL._AC_SL1002_.jpg'
          rating={4}
        />
      </div>

      <div className="homeRow">
        <Product
          id='3'
          title='Beats Solo3 Wireless Headphones: Bluetooth, 40 Hours of Listening, Microphone - Rose Gold'
          price={199.95}
          image='https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_SL1000_.jpg'
          rating={4.5}
        />
        <Product
          id='4'
          title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB Storage) - Space Gray'
          price={1499.00}
          image='https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg'
          rating={5}
        />
        <Product
          id='5'
          title='Eterish Orthopedic Dog Bed for Large Dogs, Egg-Crate Foam Dog Bed with Removable Cover - Grey'
          price={45.99}
          image='https://m.media-amazon.com/images/I/61NwV9AxxML._AC_SL1500_.jpg'
          rating={4.5}
        />
      </div>

      <div className="homeRow">
        <Product
          id='6'
          title='SAMSUNG 75-Inch Class Neo QLED QN90A Series - 4K UHD Quantum HDR 32x Smart TV with Alexa Built-in (QN75QN90AAFXZA, 2021 Model)'
          price={2597.99}
          image='https://m.media-amazon.com/images/I/913+l9CB6cL._AC_SL1500_.jpg'
          rating={5}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Home
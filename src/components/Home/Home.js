import Product from '../Product/Product'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="homeCont">
        <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazonPrimeVideoPic" />
      </div>

      <div className="homeRow">
        <Product 
          title='Apple'
          price={5.99}
          image='https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM='
          rating={5}
        />
        <Product />
      </div>

      <div className="homeRow">
        <Product />
        <Product />
        <Product />
      </div>

      <div className="homeRow">
        <Product />
      </div>

    </div>
  )
}

export default Home
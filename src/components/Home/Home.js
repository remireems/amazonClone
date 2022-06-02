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
          title='Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Rose Gold (Latest Model)'
          price={199.95}
          image='https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_SL1000_.jpg'
          rating={5}
        />
        <Product
          id='4'
          title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
          price={1499.00}
          image='https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg'
          rating={5}
        />
        <Product
          id='5'
          title='Eterish Orthopedic Dog Bed for Medium, Large Dogs, Egg-Crate Foam Dog Bed with Removable Cover, Pet Bed Machine Washable, Grey'
          price={45.99}
          image=''
          rating={4}
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

    </div>
  )
}

export default Home
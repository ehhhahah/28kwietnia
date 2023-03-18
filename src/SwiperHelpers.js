import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import evilmedved from './assets/artists/evilmedved1.jpeg'
import mimi from './assets/artists/mimi1.jpeg'
import plk from './assets/artists/plk2.jpeg'
import szustak from './assets/artists/szustak2.jpeg'
import luna from './assets/artists/luna1.png'
import coffee from './assets/coffe-time-minify.svg'
import getArtist from './artistHelpers'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function App() {
  const [coffeeBad, setCoffeeBad] = useState(false)
  return (
    <Swiper
      centeredSlides={true}
      navigation={true}
      grabCursor={true}
      // pagination={pagination}
      // modules={[Pagination]}
      effect={'flip'}
      loop={true}
      slidesPerView={window.innerWidth > 1200 ? (window.innerWidth > 500 ? 3 : 2) : 1}
      // centeredSlidesBounds={true}
      className='mySwiper'>
      <SwiperSlide>
        <div>
          <p className='sliderText'>{getArtist('evil medved', true)}</p>
          <p className='sliderTextSmall'>
            fot:{' '}
            <a href='https://shapeplatform.eu/artist/evil-medved/' style={{ color: '#fff2ccaa' }}>
              shapeplatform.eu/
            </a>
          </p>
          <img height={500} id='' src={evilmedved} alt='evil medved' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className='sliderText'>{getArtist('marzena wieczór', true)}</p>
          <p className='sliderTextSmall'>
            fot:{' '}
            <a
              href='https://www.unsound.pl/en/archive/en/solidarity/artists/niemy-dotyk.html'
              style={{ color: '#fff2ccaa' }}>
              unsound.pl/
            </a>
          </p>
          <img height={500} id='' src={mimi} alt='marzena wieczór' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className='sliderText'>{getArtist('plk', true)}</p>
          <p className='sliderTextSmall'>
            fot:{' '}
            <a href='https://www.instagram.com/kmwtw420/' style={{ color: '#fff2ccaa' }}>
              KMWTW
            </a>
          </p>
          <img height={600} id='' src={plk} alt='PLK' />{' '}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          onClick={() => {
            setCoffeeBad(!coffeeBad)
          }}>
          <img
            height={500}
            id=''
            src={coffee}
            style={coffeeBad ? { filter: 'invert(1)', rotate: '180deg' } : { filter: 'invert(0)' }}
            alt='coffee'
          />
          <p className='sliderText'>{coffeeBad ? 'aaaaaa bad coffee!!!' : '"coffe" time'}</p>
          <p className='sliderTextSmall'>{coffeeBad ? 'poparzyło cię 😈' : '"mmmm kawunia 😋'}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className='sliderText'>{getArtist('luna aura', true)}</p>
          <img height={500} id='' src={luna} alt='luna aura' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className='sliderText'>{getArtist('roll geep', true)}</p>
          <p className='sliderTextSmall'>
            fot:{' '}
            <a href='https://www.instagram.com/kmwtw420/' style={{ color: '#fff2ccaa' }}>
              KMWTW
            </a>
          </p>
          <img height={500} id='' src={szustak} alt='roll geep' />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
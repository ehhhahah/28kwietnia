import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import evilmedved from './assets/artists/evilmedved1.webp'
import mimi from './assets/artists/mimi1.webp'
import plk from './assets/artists/plk2.webp'
import szustak from './assets/artists/szustak2.webp'
import luna from './assets/artists/luna1.webp'
import coffee from './assets/coffe-time-minify.svg'
import Artist from './artistHelpers'
import artists from './assets/artists/artists.json'

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
        <a href='https://www.instagram.com/evilm___/'>
          <div>
            <p className='sliderText'>
              {<Artist artistObj={artists['evil medved']} optionsIn={{ randomizeCase: true }} />}
            </p>
            <p className='sliderTextSmall'>
              fot: <a href='https://shapeplatform.eu/artist/evil-medved/'>shapeplatform.eu/</a>
            </p>
            <img height={500} width={750} id='' src={evilmedved} alt='evil medved' />
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='https://www.instagram.com/godblessthedeathdrive/'>
          <div>
            <p className='sliderText'>{<Artist artistObj={artists['mi mi']} optionsIn={{ randomizeCase: true }} />}</p>
            <p className='sliderTextSmall'>
              fot: <a href='https://www.unsound.pl/en/archive/en/solidarity/artists/niemy-dotyk.html'>unsound.pl/</a>
            </p>
            <img height={500} width={750} id='' src={mimi} alt='marzena wieczór' />
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='https://www.instagram.com/polak_/'>
          <div>
            <p className='sliderText'>{<Artist artistObj={artists['plk']} optionsIn={{ randomizeCase: true }} />}</p>
            <p className='sliderTextSmall'>
              fot: <a href='https://www.instagram.com/kmwtw420/'>KMWTW</a>
            </p>
            <img height={500} width={750} id='' src={plk} alt='PLK' />{' '}
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <div
          onClick={() => {
            setCoffeeBad(!coffeeBad)
          }}>
          <img
            height={500}
            width={750}
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
        <a href='https://www.instagram.com/luna.nova777/'>
          <div>
            <p className='sliderText'>
              {<Artist artistObj={artists['luna aura']} optionsIn={{ randomizeCase: true }} />}
            </p>
            <img height={500} width={750} id='' src={luna} alt='luna aura' />
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='https://www.instagram.com/roll_geep/'>
          <div>
            <p className='sliderText'>
              {<Artist artistObj={artists['szustak']} optionsIn={{ randomizeCase: true }} />}
            </p>
            <p className='sliderTextSmall'>
              fot: <a href='https://www.instagram.com/kmwtw420/'>KMWTW</a>
            </p>
            <img height={500} width={750} id='' src={szustak} alt='immortal wojtecnique' />
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  )
}

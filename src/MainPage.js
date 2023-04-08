import coffeTime from './assets/coffe-time-minify.svg'
import rk_logo from './assets/rk_logo.webp'
import krowa_logo from './assets/krowa.webp'
import locoPlEng from './assets/locoPlEng.json'
import artists from './assets/artists/artists.json'

import { useState, useEffect } from 'react'
import SwiperApp from './SwiperHelpers'
import getArtist from './artistHelpers'

function MainPage() {
  const [lang, setLang] = useState('eng')
  const [countdown, setCoundown] = useState('')
  const [coffeeBad, setCoffeeBad] = useState(false)
  const [isLight, setIsLigth] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [hideSwitcher, setHideSwitcher] = useState(false)
  const [hideFbBanner, setHideFbBanner] = useState(false)

  const toggleTheme = (checkout = false) => {
    document.documentElement.style.setProperty('--main_', isLight ? '#fff2ccff' : '#4a2fa0ff')
    document.documentElement.style.setProperty('--white_', isLight ? '#4a2fa0ff' : '#fff2ccff')
    document.documentElement.style.setProperty('--accent_', isLight ? '#c9daf8ff' : '#8d3535ff')
    document.documentElement.style.setProperty('--black_', isLight ? '#dac0b0ff' : '#151518ff')
    if (!checkout) {
      setIsLigth(!isLight)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCoundown(countdownFun())
      // const swiper = document.querySelector('.swiper').swiper
      // if (Math.random() < 0.2) {
      //   swiper.slideNext()
      // }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const getLoco = (textPhrase) => {
    if (lang === 'eng') {
      try {
        return locoPlEng[textPhrase]['eng']
      } catch (e) {
        console.log("Can't find translation for: " + textPhrase)
        return textPhrase
      }
    }
    if (lang === 'xd') {
      return locoPlEng[textPhrase]['xd']
    }
    return textPhrase
  }

  const countdownFun = () => {
    const date = new Date('2023-04-28T20:00:00')
    const now = new Date()
    const seconds = parseInt(Math.abs(date.getTime() - now.getTime()) / 1000)
    return <span className='fontFix'>{seconds}</span>
  }

  return (
    <div className='App'>
      {!hideFbBanner ? (
        <div id='fbBanner'>
          <span>
            <a href='https://www.facebook.com/events/155093810520816/'>
              {' '}
              {window.innerWidth < 800
                ? 'https://fb.com/events/155093810520816/'
                : 'https://www.facebook.com/events/155093810520816/ ↗'}
            </a>
          </span>
          <button
            className='hider link'
            onClick={() => {
              setHideFbBanner(true)
            }}>
            X
          </button>
        </div>
      ) : null}
      <div className={`langSwitch ${hideSwitcher ? '' : 'shownSwitcher'}`}>
        {hideSwitcher ? (
          <div className='langSwitcher link hider' onClick={() => setHideSwitcher(false)}>
            {'⤴'}
          </div>
        ) : (
          <div className='langSwitcher link hider' onClick={() => setHideSwitcher(true)}>
            {'⤵'}
          </div>
        )}
        {!hideSwitcher ? (
          <span>
            {/* <div className='langSwitcher text'>🌎</div> */}
            <div className={`langSwitcher link ${lang === 'eng' ? 'active' : ''}`} onClick={() => setLang('eng')}>
              🇺🇸
            </div>
            <div className={`langSwitcher link ${lang === 'pl' ? 'active' : ''}`} onClick={() => setLang('pl')}>
              🇵🇱
            </div>
            {/* <div className={`langSwitcher link ${lang === 'xd' ? 'active' : ''}`} onClick={() => setLang('xd')}>
              ☕️
            </div> */}
            {/* <div className='langSwitcher text'>👁️</div> */}
            <div className={`langSwitcher link ${isLight ? '' : 'active'}`} onClick={() => toggleTheme()}>
              {isLight ? '🌙' : '🌞'}
            </div>
            {/* <div
              className='langSwitcher link'
              onClick={() => {
                if (!coffeeBad) {
                  if (
                    window.confirm(
                      getLoco(
                        'kliknięcie tego przycisku może być niebezpieczne dla epileptyków oraz przeciwników kawy. Czy na pewno chcesz kontynuować?'
                      )
                    )
                  ) {
                    document.documentElement.style.filter =
                      'blur(10px) hue-rotate(66deg) blur(6px) contrast(166%) blur(4px) invert(26%) blur(2px) saturate(666) blur(20px) invert(100%)'
                    document.documentElement.style.setProperty('--main_', '#fff2ccff')
                    document.documentElement.style.setProperty('--white_', '#4a2fa0ff')
                    setCoffeeBad(true)
                  }
                } else {
                  document.documentElement.style.setProperty('--main_', '#4a2fa0ff')
                  document.documentElement.style.setProperty('--white_', '#fff2ccff')
                  document.documentElement.style.filter = 'invert(0%)'
                  setCoffeeBad(false)
                }
              }}>
              😈
            </div> */}
            <a href='https://www.facebook.com/events/155093810520816/'>
              <div className='langSwitcher link' style={{ fontSize: '12px' }} onClick={() => {}}>
                event on facebook
              </div>
            </a>
          </span>
        ) : null}
      </div>
      <div className='tooltip tooltipEntrance'>
        <img width={150} height={115} id='coffee' src={coffeTime} alt='coffee time' />
        <span className='tooltiptext subSubText' style={{ bottom: '-15%' }}>
          "caffe" time 😋
        </span>
      </div>
      <p className='subSubText'>
        {getLoco(
          'poniżej mozesz przeczytać o występujących artystach, klikając w ich pseudonimy artystyczne. bieżące informacje o koncercie znajdziesz na moich mediach społecznościowych'
        )}{' '}
        (
        <a className='fontFix' href='https://www.facebook.com/ehhahah'>
          facebook
        </a>{' '}
        {getLoco('oraz')}{' '}
        <a className='fontFix' href='https://www.instagram.com/ehhhhahah/'>
          instagram
        </a>
        ). {getLoco('proszę, przyjdźcie')}{' '}
      </p>
      <hr className='bigger' />
      <h1>{getLoco('Artysci')}</h1>
      <div id='mainText'>
        {getLoco('zagra coolest')} {getArtist('luna aura')} (dj), {getLoco('wyjatkowa')} {getArtist('marzena wieczór')}{' '}
        (dj), {getLoco('czeski mega talent')} {getArtist('evil medved')} (live), {getLoco('kochana')} {getArtist('plk')}{' '}
        (dj), {getLoco('ja')} {}
        {/* <span className='nobr'> */}
        {getArtist('vvojtek')} (dj), {getLoco('gigaziom')} {getArtist('roll geep')} (live),{' '}
        {getLoco('a scenografie zrobi boskie')} {getArtist('HOusE_oF_WeiRDnESsNesS')}
        {/* </span> */}
      </div>
      {/*czeski mega talent eVil MEDved (live), kochana PLk (dj), ja vvojTeK (dj), gigaziom (live) immoRtal wojteCnIque, a scenografie zrobi boskie HOusE_oF_WeiRDnESsNesS */}
      {/* <div id='mainText dynamic'>
        {getLoco('zagra ziom')} {<Artist artistObj={artists['szustak']} optionsIn={{ isDropdown: true }} />} (live),{' '}
        {getLoco('kochana')} {<Artist artistObj={artists['plk']} optionsIn={{ isDropdown: true }} />} (dj),{' '}
        {getLoco('wyjatkowa')} {<Artist artistObj={artists['mi mi']} optionsIn={{ isDropdown: true }} />} (dj){' '}
        {getLoco('oraz')} {<Artist artistObj={artists['evil medved']} optionsIn={{ isDropdown: true }} />} (live){' '}
        {getLoco('prosto z czech i bedzie fajna')}{' '}
        <span className='nobr'>{<Artist artistObj={artists['luna aura']} optionsIn={{ isDropdown: true }} />}(dj)</span>
      </div> */}
      {/* {<SwiperApp />} */}

      <hr className='bigger' />
      <h1>{getLoco('Czas i miejsce')}</h1>
      <div className='doubleFlex'>
        <div className='subText'>
          <p>
            <span className='fontFix'>28</span> {getLoco('kwietnia')} <span className='fontFix'>2023</span>,{' '}
            {getLoco('piątek')}
            <span className='fontFix'> 20:00</span>
          </p>
          <p>
            <a href='https://www.facebook.com/swietakrowa'>Święta Krowa</a>, ul. Smoleńsk 22, Kraków
          </p>
          <div style={{ background: '#00000000', marginTop: '10px' }}>
            <a href='https://www.facebook.com/swietakrowa'>
              <img
                height={125}
                width={125}
                src={krowa_logo}
                style={{
                  filter: isLight
                    ? 'invert(100%) '
                    : 'invert(24%) sepia(32%) saturate(3565%) hue-rotate(236deg) brightness(70%) contrast(103%)'
                }}
                alt='Święta Krowa'
              />
            </a>
          </div>
        </div>
        <div className='flexColumn '>
          <div className='map-responsive'>
            <iframe
              title='map'
              id='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.3260673258143!2d19.92664426956398!3d50.05819581669871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b53183423%3A0x43858e8429f7ddd9!2sSmole%C5%84sk%2022%2C%2031-112%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1679140641184!5m2!1sen!2spl'
              width='600'
              height='400'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
          <p className='subSubText opacityText'>
            {getLoco('po wejsciu w kamienice na ul. Smolensk 22 prosze kierowac sie do samego konca dziedzinca')}
          </p>
        </div>
      </div>
      <hr />
      <h1>{getLoco('Organizacyjne')}</h1>

      <div className='tooltip tooltipEntrance'>
        <p className='subSubText'>
          {getLoco('wstęp') + '  '}
          <span className='fontFix'>30</span> zł
        </p>
        <span className='tooltiptext subSubText'>{getLoco('mozliwość zapłaty gotówką, kartą lub blikiem')}</span>
      </div>
      <p className='subSubText'>
        {getLoco(
          'odezwij się do nas, jeśli chcesz przyjść na wydarzenie, ale nie stać cię na bramke. kontakt jest dostępny na dole strony'
        )}
      </p>

      <div className='flexColumn'>
        <p className='subSubText'>{getLoco('plan czasowy wydarzenia i dodatkowe informacje beda dostepne pózniej')}</p>
        {/* <table id='timetable'>
          <thead>
            <tr>
              <th>{getLoco('artysta')}</th>
              <th>{getLoco('typ')}</th>
              <th>{getLoco('od')}</th>
              <th>{getLoco('do')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{getArtist('luna aura', true)}</th>
              <th>dj</th>
              <th>20:00</th>
              <th>21:00</th>
            </tr>
            <tr>
              <th>{getArtist('immortal wojtecnique', true)}</th>
              <th>live</th>
              <th>21:00</th>
              <th>22:00</th>
            </tr>
            <tr>
              <th>{getArtist('evil medved', true)}</th>
              <th>live</th>
              <th>22:00</th>
              <th>22:45</th>
            </tr>
            <tr>
              <th>{getArtist('plk', true)}</th>
              <th>dj</th>
              <th>23:00</th>
              <th>01:00</th>
            </tr>
            <tr>
              <th>{getArtist('marzena wieczór', true)}</th>
              <th>dj</th>
              <th>01:00</th>
              <th>03:00</th>
            </tr>
            <tr>
              <th>
                {getArtist('plk', true)} b2b {getArtist('marzena wieczór', true)}
              </th>
              <th>dj</th>
              <th>03:00</th>
              <th>?</th>
            </tr>
          </tbody>
        </table> */}
      </div>
      <hr />
      <h1>
        {getLoco('Audycje w Radio Kapital')}
        {/* <a href='https://radiokapital.pl/'>Radio Kapital</a> */}
      </h1>

      <div className='flexColumn'>
        <p className='subSubText'>
          {getLoco(
            'najlepszy sposob na poznanie artystów to posłuchanie audycji w Radio Kapitał przygotowanych specjalnie na to wydarzenie'
          )}
        </p>
        <p className='subText'>{getLoco('pierwsza audycja radiowa zostanie wyemitowana niebawem')}</p>
        <p className='subSubText'>
          {getLoco('po emisji audycja zostanie zarchiwizowana i opublikowana na tej stronie kilka dni później')}.{' '}
          {getLoco('w miedzyczasie zapraszamy do stałej ramówki Radia Kapitał artystów wystepujacych na koncercie')}:
        </p>
        <table id='timetable'>
          <thead>
            <tr>
              <th>{getLoco('artysta')}</th>
              <th>{getLoco('audycje')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>roll geep</th>
              <th>
                <a href='https://radiokapital.pl/shows/chrzeszczo-brzeszcze/'>"chrzeszczo-brzeszcze"</a>
              </th>
            </tr>
            <tr>
              <th>Marzena Wieczór</th>
              <th>
                <a href='https://radiokapital.pl/shows/virgo-moon-malware/'>"virgo moon malware"</a>,<br />
                <a href='https://radiokapital.pl/shows/the-mirror-world-mirrors/'>"the mirror world mirrors"</a>
              </th>
            </tr>
            <tr>
              <th>
                <div className='tooltip tooltipEntrance'>
                  <p>ehh hahah</p>
                  <span className='tooltiptext subSubText'>{getLoco('organizator imprezy')}</span>
                </div>
              </th>
              <th>
                <a href='https://radiokapital.pl/shows/muzyka-ehha/'>"muzyka ehha"</a>
              </th>
            </tr>
          </tbody>
        </table>

        {/* <div className='rkEmbed'>
          <iframe
            title='RKMIX1'
            width='100%'
            height='60'
            src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fradiokapital%2Fradio-kapita%C5%82-do-3-razy-sztuka-11-luka-5g-2020-08-21%2F'
            frameborder='0'></iframe>
        </div>
        <div className='rkEmbed'>
          <iframe
            title='RKMIX1'
            width='100%'
            height='60'
            src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fradiokapital%2Fradio-kapita%C5%82-do-3-razy-sztuka-11-luka-5g-2020-08-21%2F'
            frameborder='0'></iframe>
        </div>
        <div className='rkEmbed'>
          <iframe
            title='RKMIX1'
            width='100%'
            height='60'
            src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fradiokapital%2Fradio-kapita%C5%82-do-3-razy-sztuka-11-luka-5g-2020-08-21%2F'
            frameborder='0'></iframe>
        </div> */}
        {/* <p>
          <a href='http://radiokapital.pl/'>Radio Kapiał</a>
        </p> */}
        <div style={{ background: '#00000000', marginTop: '10px' }}>
          <a href='https://radiokapital.pl/'>
            <img
              height={30}
              width={50}
              src={rk_logo}
              style={{
                filter: isLight
                  ? 'invert(100%)'
                  : 'invert(24%) sepia(32%) saturate(3565%) hue-rotate(236deg) brightness(70%) contrast(103%)'
              }}
              alt='Radio Kapitał'
            />
          </a>
        </div>
      </div>
      <hr />
      <h1>{getLoco('Kontakt')}</h1>

      <div className='subSubText'>
        <p>
          {getLoco('zapraszam do kontaktu w razie jakichkolwiek pytan')}{' '}
          <a href='https://linktr.ee/ehhhahah'>({getLoco('linki do kontaktu')})</a>
        </p>
        <p className='opacityText'>
          <a href='https://linktr.ee/ehhhahah'>ehh hahah</a>, 2023
        </p>
        <p className='opacityText' style={{ fontSize: 8 }}>
          {getLoco(`grafika 'czas kawy' autorstwa uzytkownika rotben dostepna jest tutaj`) + ': '}
          <a href='https://openclipart.org/detail/281530/coffee-time'>link (CC0 1.0)</a>
        </p>

        <p className='subSubText opacityText'>
          {getLoco('jeszcze')} {countdown} {' ' + getLoco('sekund')}
        </p>
      </div>
    </div>
  )
}

export default MainPage

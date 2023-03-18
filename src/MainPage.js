import coffeTime from './assets/coffe-time-minify.svg'
import rk_logo from './assets/rk_logo.png'
import locoPlEng from './assets/locoPlEng.json'
import { useState } from 'react'

function MainPage() {
  const [lang, setLang] = useState('eng')

  const getLoco = (textPhrase) => {
    if (lang === 'eng') {
      return locoPlEng[textPhrase]
    }
    return textPhrase
  }

  const randomizeCharCase = (text) => {
    return text
      .split('')
      .map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
      .join('')
  }

  const getArtist = (alias, randomizeCase = false) => {
    switch (alias.toLowerCase()) {
      case 'roll geep':
        return (
          <a id='artist' href='https://www.instagram.com/roll_geep/'>
            {!randomizeCase ? 'roLL geEp' : randomizeCharCase(alias)}
          </a>
        )
      case 'plk':
        return (
          <a id='artist' href='https://www.instagram.com/polak_/'>
            {!randomizeCase ? 'PLk' : randomizeCharCase(alias)}
          </a>
        )
      case 'marzena wieczór':
        return (
          <a id='artist' href='https://www.instagram.com/godblessthedeathdrive/'>
            {!randomizeCase ? 'marZEna wIeCzór' : randomizeCharCase(alias)}
          </a>
        )
      case 'evil medved':
        return (
          <a id='artist' href='https://www.instagram.com/evilm___/'>
            {!randomizeCase ? 'evil MEDved' : randomizeCharCase(alias)}
          </a>
        )
      case 'luna aura':
        return (
          <a id='artist' href='https://www.instagram.com/luna.nova777/'>
            {!randomizeCase ? 'lunA aURa' : randomizeCharCase(alias)}
          </a>
        )
      default:
        return null
    }
  }

  return (
    <div className='App'>
      <div className='subText'>
        <p className='fontFix'> :)</p>
        <div className='langSwitch'>
          <div className={`langSwitcher link ${lang === 'eng' ? 'active' : ''}`} onClick={() => setLang('eng')}>
            🇺🇸
          </div>
          <div className={`langSwitcher link ${lang === 'pl' ? 'active' : ''}`} onClick={() => setLang('pl')}>
            🇵🇱
          </div>
        </div>
      </div>
      <img id='coffee' src={coffeTime} alt='coffee time' />
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
        )
      </p>
      <hr className='bigger' />
      <div id='mainText'>
        {getLoco('zagra ziom')} {getArtist('roll geep')} (live), {getLoco('kochana')} {getArtist('plk')} (dj),{' '}
        {getLoco('wyjatkowa')} {getArtist('marzena wieczór')} (dj) {getLoco('oraz')} {getArtist('evil medved')} (live){' '}
        {getLoco('prosto z czech i bedzie fajna')} <span className='nobr'>{getArtist('luna aura')} (dj)</span>
      </div>
      <hr className='bigger' />
      <div id='placeInfo'>
        <div className='subText'>
          <p>
            <span className='fontFix'>28</span> {getLoco('kwietnia')} <span className='fontFix'>2023</span>,{' '}
            {getLoco('piątek')}
            <span className='fontFix'> 20:00</span>
          </p>
          <p>
            <a href='https://www.facebook.com/swietakrowa'>Święta Krowa, ul. Smoleńsk 22, Kraków</a>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <iframe
            title='map'
            id='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.3260673258143!2d19.92664426956398!3d50.05819581669871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b53183423%3A0x43858e8429f7ddd9!2sSmole%C5%84sk%2022%2C%2031-112%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1679140641184!5m2!1sen!2spl'
            width='300'
            height='300'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
          <p className='subSubText opacityText'>
            {getLoco('po wejscie w kamienice na ul. Smolensk 22 prosze kierowac sie do samego konca dziedzinca')}
          </p>
        </div>
      </div>
      <hr />
      <p className='subSubText'>{getLoco('dziwna muzyka elektroniczna na żywo i trochę dziwne dj sety')}</p>
      <div className='tooltip tooltipEntrance'>
        <p className='subSubText'>
          {getLoco('wstęp') + '  '}
          <span className='fontFix'>30</span> zł
        </p>
        <span className='tooltiptext subSubText'>{getLoco('mozliwość zapłaty jedynie gotówką lub blikiem')}</span>
      </div>
      <hr />
      <div>
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
              <th>{getArtist('roll geep', true)}</th>
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
      <p className='subSubText opacityText'>
        <p>
          {getLoco('zapraszam do kontaktu w razie jakichkolwiek pytan')}{' '}
          <a href='https://linktr.ee/ehhhahah'>({getLoco('linki do kontaktu')})</a>
        </p>
        <p>
          <a href='https://linktr.ee/ehhhahah'>ehh hahah</a>, 2023
        </p>
        <p style={{ fontSize: 8 }}>
          {getLoco(`grafika 'czas kawy' autorstwa uzytkownika rotben dostepna jest tutaj: `)}
          <a href='https://openclipart.org/detail/281530/coffee-time'>link (CC0 1.0)</a>
        </p>
        <div style={{ background: '#00000000' }}>
          <a href='https://radiokapital.pl/'>
            <img height={30} src={rk_logo} style={{ filter: 'invert(100%)' }} alt='Radio Kapitał' />
          </a>
        </div>
      </p>
    </div>
  )
}

export default MainPage

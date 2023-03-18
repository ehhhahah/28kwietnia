import coffeTime from './assets/coffe-time-minify.svg'
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

  return (
    <div className='App'>
      <div className='langSwitch'>
        <div className={`langSwitcher link ${lang === 'eng' ? 'active' : ''}`} onClick={() => setLang('eng')}>
          🇺🇸
        </div>
        <div className={`langSwitcher link ${lang === 'pl' ? 'active' : ''}`} onClick={() => setLang('pl')}>
          🇵🇱
        </div>
      </div>
      <img id='coffee' src={coffeTime} alt='coffee time' />
      <p className='subText'>
        {getLoco('hej')} <span className='fontFix'> :)</span>
      </p>

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
      <br />
      <div id='mainText'>
        {getLoco('zagra ziom')}{' '}
        <a id='artist' href='https://www.instagram.com/roll_geep/'>
          roLL geEp
        </a>{' '}
        (live), {getLoco('kochana')}{' '}
        <a id='artist' href='https://www.instagram.com/polak_/'>
          PLk
        </a>{' '}
        (dj), {getLoco('wyjatkowa')}{' '}
        <a id='artist' href='https://www.instagram.com/godblessthedeathdrive/'>
          marZEna wIeCzór
        </a>{' '}
        (dj) {getLoco('oraz')}{' '}
        <a id='artist' href='https://www.instagram.com/evilm___/'>
          evil MEDved
        </a>{' '}
        (live) {getLoco('prosto z czech i bedzie fajna')}{' '}
        <span className='nobr'>
          <a id='artist' href='https://www.instagram.com/luna.nova777/'>
            lunA aURa
          </a>{' '}
          (dj)
        </span>
      </div>
      <br />
      <p className='subText'>
        <span className='fontFix'>28</span> {getLoco('kwietnia')} <span className='fontFix'>2023</span>,{' '}
        {getLoco('piątek')}
        <span className='fontFix'> 20:00</span>
      </p>
      <p className='subText'>
        <a href='https://www.facebook.com/swietakrowa'>Święta Krowa, ul. Smoleńsk 22, Kraków</a>
      </p>
      <p className='subSubText'>{getLoco('dziwna muzyka elektroniczna na żywo i trochę dziwne dj sety')}</p>
      <p className='subSubText'>
        {getLoco('wstęp')} <span className='fontFix'>30</span> zł
      </p>
    </div>
  )
}

export default MainPage

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
export default getArtist

import { useEffect, useState } from 'react'
import ArtistModal from './ArtistModal'

// export function Artist(artistObj_, options_) {
//   const [artistObj, setArtistObj] = useState({})
//   const [options, setOptions] = useState({})
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [artistModal, setArtistModal] = useState(false)

//   useEffect(() => {
//     setArtistObj(artistObj_.artistObj)
//     setOptions({
//       randomizeCase: false,
//       prettyCase: false,
//       isDropdown: false
//     })
//     setOptions({ ...options, options_ })
//   }, [artistObj_, options_])

//   const getBasicText = () => {
//     if (options.randomizeCase) {
//       return randomizeCharCase(artistObj.prettyCase)
//     }
//     if (options.prettyCase) {
//       return artistObj.prettyCase
//     }
//     return artistObj.uglyCase
//   }

//   const makeModal = () => {}

//   const callbackModal = () => {
//     setArtistModal(false)
//   }

//   return options.isDropdown ? (
//     <span id='dropdownMenu'>
//       {getBasicText()}
//       <button
//         id='dropdownShow'
//         onClick={() => {
//           setShowDropdown(!showDropdown)
//         }}>
//         v
//       </button>
//       {showDropdown ? (
//         <div id='dropdown'>
//           <a href={artistObj.href.ig}>Instagram</a>
//         </div>
//       ) : null}
//     </span>
//   ) : (
//     // <a id='artist' href={artistObj.href}>
//     //   {getBasicText()}
//     // </a>
//     <div onClick={() => setArtistModal(true)}>
//       {getBasicText()}
//       {artistModal ? <ArtistModal activeArtist={artistObj} callbackModal={callbackModal} /> : null}
//     </div>
//   )
// }

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
    case 'ehh hahah':
      return (
        <a id='artist' href='https://www.instagram.com/ehhhhahah/'>
          {!randomizeCase ? 'eHh hAHah' : randomizeCharCase(alias)}
        </a>
      )
    default:
      return null
  }
}
export default getArtist

import React, { useState } from 'react'

const ArtistModal = (props) => {
  const [artist, setArtist] = useState(props.activeArtist)

  return (
    <section className='modal-section' id='popup-modal'>
      <div className='modal-container'>
        <h1>{artist.prettyCase}</h1>
        <button onClick={() => props.callbackModal()}>close</button>
      </div>
    </section>
  )
}

export default ArtistModal

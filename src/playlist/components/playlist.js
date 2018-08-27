import React from 'react';
import Media from './media.js'
// import Enlarge from '../../icons/components/enlarge'
function Playlist(props) {
  return(
    <div className="Playlist">
      {
        props.playlist.map((item)=>{
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
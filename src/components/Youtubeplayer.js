import React from "react"
import ReactPlayer from "react-player/lazy"

const Youtubeplayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  )
}
export default Youtubeplayer

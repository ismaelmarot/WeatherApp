import { useRef } from 'react'
import { Video } from './BackgroundVideo.style'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <Video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload='auto'
    >
      <source
        src='/videos/background_weather_00.mp4'
        type='video/mp4'
      />
    </Video>
  )
}
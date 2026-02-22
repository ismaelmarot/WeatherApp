import { useEffect, useRef } from 'react'
import { Video } from './BackgroundVideo.style'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
      if (!video) return

      video.muted = true
      video.play().catch(() => {
      })
  }, [])

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
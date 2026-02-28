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
      data-testid='background-video'
      autoPlay
      muted
      loop
      playsInline
      preload='auto'
    >
      <source
        src={`${import.meta.env.BASE_URL}videos/background_weather_00.mp4`}
        type="video/mp4"
      />
    </Video>
  )
}
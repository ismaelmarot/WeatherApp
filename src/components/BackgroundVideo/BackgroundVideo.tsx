import { useEffect, useRef } from 'react'
import { Video, VideoWrapper } from './BackgroundVideo.style'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()

    const attemptPlay = async () => {
      try {
        video.muted = true
        await video.play()
      } catch {
        // Autoplay blocked, will play on user interaction
      }
    }

    attemptPlay()

    const handleUserInteraction = () => {
      if (video.paused) {
        video.play().catch(() => {})
      }
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }

    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('click', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [])

  return (
    <VideoWrapper>
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
    </VideoWrapper>
  )
}
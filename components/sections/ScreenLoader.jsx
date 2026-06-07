'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import styles from '@/styles/sections/ScreenLoader.module.css'

export default function ScreenLoader({ onDismiss }) {
  const overlayRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2

      if (current >= 100) {
        current = 100
        clearInterval(interval)
      }

      setProgress(current)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  function handleStart() {

    window.dispatchEvent(
      new CustomEvent('start-video')
    )
    const overlay = overlayRef.current

    gsap.to(overlay, {
      opacity: 0,
      scale: 1.05,
      duration: 1.1,
      ease: 'power4.inOut',
      onComplete: () => {
        onDismiss()
      },
    })
  }

  
  return (
  <div ref={overlayRef} className={styles.overlay}>
    <div className={styles.content}>
      <div className={styles.logo}>
  SHUBHAM
      </div>

      <div className={styles.role}>
        FULL STACK DEVELOPER
      </div>

      <div className={styles.boot}>
        SYSTEM BOOTING...
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.percent}>
        {progress}%
      </div>

      <div className={styles.loadingText}>
        Loading Experience...
      </div>

      {progress === 100 && (
        <button
          className={styles.startBtn}
          onClick={handleStart}
        >
          ENTER
        </button>
      )}
    </div>
  </div>
)
}
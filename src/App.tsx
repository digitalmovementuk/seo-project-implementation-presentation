import {
  AnimatePresence,
  motion,
  type PanInfo,
  useReducedMotion,
} from 'framer-motion'
import { startTransition, useEffect, useState } from 'react'
import { slides } from './slides'

const swipeThreshold = 90
const brandLogoPath = '/digital-movement-logo-negative.svg'

function clampSlideIndex(index: number) {
  return Math.max(0, Math.min(slides.length - 1, index))
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const activeSlide = slides[activeIndex]
  const canGoBack = activeIndex > 0
  const canGoForward = activeIndex < slides.length - 1

  const navigateTo = (nextIndex: number) => {
    const clampedIndex = clampSlideIndex(nextIndex)

    if (clampedIndex === activeIndex) {
      return
    }

    startTransition(() => {
      setDirection(clampedIndex > activeIndex ? 1 : -1)
      setActiveIndex(clampedIndex)
    })
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        const nextIndex = clampSlideIndex(activeIndex + 1)
        if (nextIndex !== activeIndex) {
          startTransition(() => {
            setDirection(1)
            setActiveIndex(nextIndex)
          })
        }
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        const nextIndex = clampSlideIndex(activeIndex - 1)
        if (nextIndex !== activeIndex) {
          startTransition(() => {
            setDirection(-1)
            setActiveIndex(nextIndex)
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [activeIndex])

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = Math.abs(info.offset.x) * Math.sign(info.offset.x)

    if (swipe <= -swipeThreshold) {
      navigateTo(activeIndex + 1)
    }

    if (swipe >= swipeThreshold) {
      navigateTo(activeIndex - 1)
    }
  }

  return (
    <div className="presentation-shell">
      <motion.div
        aria-hidden="true"
        className="ambient ambient-one"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 48, -24, 0], y: [0, -36, 16, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="ambient ambient-two"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -44, 22, 0], y: [0, 28, -22, 0], scale: [1, 0.94, 1.06, 1] }
        }
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="presentation-frame">
        <header className="presentation-header">
          <div className="brand-lockup">
            <img
              className="brand-logo"
              src={brandLogoPath}
              alt="Digital Movement"
              width="1098"
              height="234"
            />
            <span className="brand-kicker">Web Presentation</span>
            <span className="brand-name">SEO Project Implementation</span>
          </div>

          <div className="header-meta">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="header-divider" />
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
        </header>

        <main className="deck-stage">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.article
              key={activeSlide.id}
              className="slide"
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              initial={prefersReducedMotion ? { opacity: 0 } : 'enter'}
              animate={prefersReducedMotion ? { opacity: 1 } : 'center'}
              exit={prefersReducedMotion ? { opacity: 0 } : 'exit'}
              variants={{
                enter: (customDirection: number) => ({
                  opacity: 0,
                  x: customDirection > 0 ? 140 : -140,
                  rotate: customDirection > 0 ? 2 : -2,
                  scale: 0.98,
                }),
                center: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                },
                exit: (customDirection: number) => ({
                  opacity: 0,
                  x: customDirection > 0 ? -160 : 160,
                  rotate: customDirection > 0 ? -1.5 : 1.5,
                  scale: 0.985,
                  transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                }),
              }}
              onDragEnd={handleDragEnd}
            >
              <div className="slide-backdrop" />
              <div className="slide-grid">
                <section className="slide-copy">
                  <div className="slide-eyebrow-row">
                    <span className="slide-index">
                      {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="slide-eyebrow">{activeSlide.eyebrow}</span>
                  </div>

                  <h1>{activeSlide.title}</h1>
                  <p className="slide-summary">{activeSlide.summary}</p>

                  <ul className="slide-bullets">
                    {activeSlide.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>

                <aside className="slide-rail">
                  <div className="rail-stat">
                    <span className="rail-label">{activeSlide.primaryPanelLabel}</span>
                    <p>{activeSlide.primaryPanelText}</p>
                  </div>

                  {activeSlide.deliverable ? (
                    <div className="rail-deliverable">
                      <span className="rail-label">Delivered at this milestone</span>
                      <p>{activeSlide.deliverable}</p>
                    </div>
                  ) : null}

                  <div className="rail-accent-word" aria-hidden="true">
                    {activeSlide.accentWord}
                  </div>

                  <div className="slide-brand-mark" aria-hidden="true">
                    <img
                      src={brandLogoPath}
                      alt=""
                      width="1098"
                      height="234"
                    />
                  </div>
                </aside>
              </div>
            </motion.article>
          </AnimatePresence>
        </main>

        <footer className="presentation-footer">
          <div className="footer-actions">
            <button
              className="nav-button"
              type="button"
              onClick={() => navigateTo(activeIndex - 1)}
              disabled={!canGoBack}
            >
              Previous
            </button>
            <button
              className="nav-button nav-button--primary"
              type="button"
              onClick={() => navigateTo(activeIndex + 1)}
              disabled={!canGoForward}
            >
              Next
            </button>
          </div>

          <div className="progress-track" aria-label="Slide progress">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`progress-segment${index === activeIndex ? ' is-active' : ''}`}
                type="button"
                onClick={() => navigateTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <div className="footer-note">
            Swipe on touch, drag on desktop, or use arrow keys
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

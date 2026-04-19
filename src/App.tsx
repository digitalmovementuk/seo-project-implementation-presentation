import {
  AnimatePresence,
  motion,
  type PanInfo,
  useReducedMotion,
} from 'framer-motion'
import { startTransition, useEffect, useState } from 'react'
import { slides } from './slides'

const swipeThreshold = 90
const slideEase = [0.22, 1, 0.36, 1] as const
const brandLogoPath = `${import.meta.env.BASE_URL}digital-movement-logo-negative.svg`

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
  const activeVisualStyle = {
    objectPosition: activeSlide.visual.position,
    transform: `scale(${activeSlide.visual.scale})`,
    filter: activeSlide.visual.filter,
  }

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
            : { x: [0, 22, -14, 0], y: [0, -20, 12, 0], scale: [1, 1.04, 0.98, 1] }
        }
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="ambient ambient-two"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -18, 14, 0], y: [0, 16, -14, 0], scale: [1, 0.97, 1.03, 1] }
        }
        transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="presentation-frame">
        <header className="presentation-header">
          <div className="brand-chip">
            <div className="brand-logo-wrap">
              <img
                className="brand-logo"
                src={brandLogoPath}
                alt="Digital Movement"
                width="1098"
                height="234"
              />
            </div>

            <div className="brand-copy">
              <span className="brand-kicker">Lead Presentation</span>
              <span className="brand-name">SEO Project Implementation</span>
            </div>
          </div>

          <div className="header-meta">
            <span className="header-count">
              {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <span className="header-divider" />
            <span>{activeSlide.eyebrow}</span>
          </div>
        </header>

        <main className="deck-stage">
          <AnimatePresence custom={direction} initial={false} mode="sync">
            <motion.article
              key={activeSlide.id}
              className="slide"
              data-has-deliverable={activeSlide.deliverable ? 'true' : 'false'}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              dragMomentum={false}
              initial={prefersReducedMotion ? { opacity: 0 } : 'enter'}
              animate={prefersReducedMotion ? { opacity: 1 } : 'center'}
              exit={prefersReducedMotion ? { opacity: 0 } : 'exit'}
              variants={{
                enter: (customDirection: number) => ({
                  opacity: 0,
                  x: customDirection > 0 ? 104 : -104,
                  rotate: customDirection > 0 ? 0.45 : -0.45,
                  scale: 0.986,
                  filter: 'blur(10px)',
                }),
                center: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: {
                    x: { type: 'spring', stiffness: 240, damping: 30, mass: 0.92 },
                    opacity: { duration: 0.26, ease: slideEase },
                    rotate: { duration: 0.42, ease: slideEase },
                    scale: { duration: 0.42, ease: slideEase },
                    filter: { duration: 0.3, ease: slideEase },
                  },
                },
                exit: (customDirection: number) => ({
                  opacity: 0,
                  x: customDirection > 0 ? -92 : 92,
                  rotate: customDirection > 0 ? -0.35 : 0.35,
                  scale: 0.99,
                  filter: 'blur(8px)',
                  transition: {
                    x: { duration: 0.34, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.22, ease: slideEase },
                    rotate: { duration: 0.28, ease: slideEase },
                    scale: { duration: 0.28, ease: slideEase },
                    filter: { duration: 0.22, ease: slideEase },
                  },
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

                <aside
                  className="slide-rail"
                  data-has-deliverable={activeSlide.deliverable ? 'true' : 'false'}
                >
                  <div className="rail-visual">
                    <img
                      className="rail-visual-image"
                      src={activeSlide.visual.src}
                      alt={activeSlide.visual.alt}
                      loading="eager"
                      style={activeVisualStyle}
                    />
                    <div className="rail-visual-scrim" aria-hidden="true" />
                    <div className="rail-visual-copy">
                      <span className="rail-label">{activeSlide.visual.label}</span>
                      <p>{activeSlide.visual.title}</p>
                    </div>
                  </div>

                  <div className="rail-card-stack">
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
                  </div>

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
            Swipe, tap, or use arrow keys
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

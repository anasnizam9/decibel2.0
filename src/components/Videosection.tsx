"use client";
import { useRef, useState, useEffect, type MouseEvent } from "react";

export default function IPadMockupSection({ videoSrc = "/images/demo.mp4" }: { videoSrc?: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const userPausedRef = useRef(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
      userPausedRef.current = false;
    } else {
      video.pause();
      setIsPlaying(false);
      userPausedRef.current = true;
    }
  };

  const toggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.muted = true;

    const tryPlay = () => {
      if (userPausedRef.current) return;
      video.muted = true;
      video.play()
        .then(() => { setIsPlaying(true); })
        .catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
          setIsPlaying(false);
          userPausedRef.current = false;
        }
      },
      { threshold: 0.3 }
    );

    const startObserving = () => observer.observe(section);
    if (video.readyState >= 1) {
      startObserving();
    } else {
      video.addEventListener("loadedmetadata", startObserving, { once: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="mockup-root"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="layout">
          <div className="copy">
            <h2 className="copy-title">
              Transforming Your Journey With AI and ML:{" "}
              <span className="accent">A Seamless Technological Enhancement</span>
            </h2>
            <p className="copy-desc">
              Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.
            </p>
            <button className="cta" onClick={togglePlay}>
              {isPlaying ? "⏸ Pause Demo" : "▶ Watch Full Demo"} →
            </button>
          </div>

          <div className="ipad-wrap">
            <div className="ipad-tilt" ref={cardRef}>
              <div className="ipad-glow" />
              <div className="ipad-shell">
                <div className="ipad-screen">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />

                  {/* ✅ Chota mute/unmute icon - bottom left */}
                  <button className="mute-icon" onClick={toggleMute} aria-label="Toggle sound">
                    {isMuted ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                        <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2.5"/>
                        <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2.5"/>
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>

                  {/* Play/Pause btn - bottom right, hover pe show */}
                  <button onClick={togglePlay} className="play-btn" aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    )}
                  </button>

                  <div
                    className="glare"
                    style={{
                      background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
                      opacity: glare.opacity > 0 ? 1 : 0,
                    }}
                  />
                </div>
                <div className="home-bar" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
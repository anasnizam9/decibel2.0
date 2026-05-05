// "use client";
// import { useEffect, useState, useCallback, useRef } from "react";
// const SLIDE_DURATION = 15000;
// const FADE_DURATION = 850;
// const TOTAL_SLIDES = 5;
// const DARK_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";
// const BRAND_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";

// function Slide1() {
//   return (
//     <section
//       className="overflow-hidden w-full h-full flex flex-col"
//       style={{ background: BRAND_BG }}
//     >
//       <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center md:pt-12">
//         <h1
//           className="text-3xl font-bold text-white md:text-5xl"
//           style={{ fontFamily: "Nunito Sans, sans-serif" }}
//         >
//           The Largest Enterprise Cloud in Pakistan Powering Human Connections with AI
//         </h1>
//         <p
//           className="mt-0.5 text-base text-white md:text-lg"
//           style={{ fontFamily: "Nunito Sans, sans-serif" }}
//         >
//           Decibel simplifies your HR digital transformation across all processes, from onboarding to retirement
//         </p>
//       </div>
//       <div className="relative z-0 -mt-20 flex-1 w-full overflow-hidden md:-mt-24">
//         <img
//           src="/images/Artboard 3.png"
//           alt="Hero Section"
//           style={{
//             width: "100%",
//             height: "calc(100% + 70px)",
//             objectFit: "cover",
//             objectPosition: "center top",
//             transform: "translateY(-105px) scale(0.9)",
//             display: "block",
//           }}
//         />
//       </div>
//     </section>
//   );
// }

// // ✅ NEW: Last slide — pure full screen image
// function Slide5FullImage() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: DARK_BG,
//         padding: "0",
//         boxSizing: "border-box",
//       }}
//     >
//       <img
//         src="/images/Untitled design1.png"
//         alt="Full Screen Slide"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//           objectPosition: "center",
//           display: "block",
//           transform: "none",
//           borderRadius: 0,
//           boxShadow: "none",
//         }}
//       />
//     </div>
//   );
// }

// function DarkSlide({ headline, body, cta, visual }: any) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: DARK_BG,
//         padding: "40px 48px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "clamp(40px, 7vw, 100px)",
//           maxWidth: "1400px",
//           width: "100%",
//         }}
//       >
//         <div style={{ flex: "0 0 38%" }}>
//           <h2
//             style={{
//               fontFamily: "Nunito Sans, sans-serif",
//               fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
//               fontWeight: 800,
//               color: "#f5fff8",
//               lineHeight: 1.25,
//               marginBottom: 10,
//               textTransform: "uppercase",
//             }}
//           >
//             {headline.map((part: any, i: number) =>
//               part.yellow ? (
//                 <span key={i} style={{ color: "#4cf29a" }}>
//                   {part.text}
//                 </span>
//               ) : (
//                 <span key={i}>{part.text}</span>
//               )
//             )}
//           </h2>
//           <p
//             style={{
//               fontSize: 16,
//               color: "rgba(205, 221, 211, 0.72)",
//               lineHeight: 1.65,
//               margin: "14px 0 28px 0",
//               maxWidth: 420,
//             }}
//           >
//             {body}
//           </p>
//         </div>
//         <div
//           style={{
//             flex: "0 0 55%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-end",
//           }}
//         >
//           {visual}
//         </div>
//       </div>
//     </div>
//   );
// }

// function DualImageVisual() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "clamp(380px, 50vh, 600px)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingRight: "12%",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "22px",
//           overflow: "hidden",
//           zIndex: 1,
//           boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
//         }}
//       >
//         <img
//           src="/images/dashnew.png"
//           alt="Dashboard"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "top left",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-5%",
//           right: "0%",
//           width: "24%",
//           height: "88%",
//           borderRadius: "28px",
//           overflow: "hidden",
//           zIndex: 3,
//           boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
//         }}
//       >
//         <img
//           src="/images/mobile.png"
//           alt="Mobile"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "top center",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function TalentImageVisual() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "clamp(380px, 50vh, 600px)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingRight: "12%",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "22px",
//           overflow: "hidden",
//           zIndex: 1,
//           boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
//         }}
//       >
//         <img
//           src="/images/talent.png"
//           alt="Talent Dashboard"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "top left",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-5%",
//           right: "0%",
//           width: "24%",
//           height: "88%",
//           borderRadius: "28px",
//           overflow: "hidden",
//           zIndex: 3,
//           boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
//         }}
//       >
//         <img
//           src="/images/mobile.png"
//           alt="Mobile"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "top center",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function VideoMockup({ src }: any) {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [muted, setMuted] = useState(true);
//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setMuted(videoRef.current.muted);
//     }
//   };
//   return (
//     <div
//       style={{
//         width: "clamp(340px, 52vw, 550px)",
//         aspectRatio: "3.2 / 2",
//         background: "linear-gradient(145deg, #1c1c1c, #2a2a2a, #111)",
//         borderRadius: 28,
//         padding: 14,
//         boxShadow: `
//           0 0 0 1px rgba(0,0,0,0.08),
//           0 40px 80px rgba(0,0,0,0.18),
//           0 8px 30px rgba(0,0,0,0.1),
//           inset 0 1px 0 rgba(255,255,255,0.08)
//         `,
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: 16,
//           overflow: "hidden",
//           background: "#000",
//           position: "relative",
//         }}
//       >
//         <video
//           ref={videoRef}
//           src={src}
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "center center",
//             borderRadius: "16px",
//             display: "block",
//           }}
//         />
//         <button
//           onClick={toggleMute}
//           style={{
//             position: "absolute",
//             bottom: 12,
//             left: 12,
//             zIndex: 4,
//             width: 28,
//             height: 28,
//             borderRadius: "50%",
//             background: "rgba(0,0,0,0.65)",
//             border: "1px solid rgba(255,255,255,0.15)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             fontSize: 10,
//             color: "white",
//           }}
//         >
//           {muted ? "🔇" : "🔊"}
//         </button>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: 6,
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: 60,
//           height: 3,
//           borderRadius: 2,
//           background: "rgba(255,255,255,0.25)",
//         }}
//       />
//     </div>
//   );
// }

// const SLIDES_CONFIG = [
//   null,
//   {
//     headline: [
//       { text: "Transforming Your Journey with AI and ML: " },
//       { text: "A Seamless Technological Enhancement", yellow: true },
//     ],
//     body: "Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.",
//     cta: "Explore AI Features",
//     visual: <DualImageVisual />,
//   },
//   {
//     headline: [
//       { text: "Zero Errors. Zero Delays. " },
//       { text: "Payroll On Autopilot.", yellow: true },
//     ],
//     body: "Fully automated payroll processing with tax compliance, multi-currency support, and one-click disbursement across Pakistan and beyond.",
//     cta: "See Payroll Module",
//     visual: <VideoMockup src="/images/0411(4).mp4" />,
//   },
//   {
//     headline: [
//       { text: "Hire Smarter, Hire Faster " },
//       { text: "with AI Matching.", yellow: true },
//     ],
//     body: "Let AI rank and shortlist your best-fit candidates automatically. Reduce time-to-hire by 60% with Decibel's intelligent recruitment engine.",
//     cta: "Explore Talent Module",
//     visual: <TalentImageVisual />,
//   },
//   null, // ✅ Slide 5 — handled separately in renderSlide
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [prev, setPrev] = useState<number | null>(null);
//   const [fading, setFading] = useState(false);

//   const goTo = useCallback(
//     (next: number) => {
//       if (fading) return;
//       setFading(true);
//       setPrev(current);
//       setCurrent(next);
//       setTimeout(() => {
//         setPrev(null);
//         setFading(false);
//       }, FADE_DURATION);
//     },
//     [current, fading]
//   );

//   useEffect(() => {
//     const t = setInterval(
//       () => goTo((current + 1) % TOTAL_SLIDES),
//       SLIDE_DURATION
//     );
//     return () => clearInterval(t);
//   }, [current, goTo]);

//   const renderSlide = (idx: number) => {
//     if (idx === 0) return <Slide1 />;
//     if (idx === 4) return <Slide5FullImage />; // ✅ Last slide — pure full screen image
//     const cfg = SLIDES_CONFIG[idx];
//     if (!cfg) return <Slide1 />;
//     return (
//       <DarkSlide
//         headline={cfg.headline}
//         body={cfg.body}
//         cta={cfg.cta}
//         visual={cfg.visual}
//       />
//     );
//   };

//   return (
//     <>
//       <section
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "112vh",
//           minHeight: 700,
//           overflow: "hidden",
//         }}
//       >
//         {prev !== null && (
//           <div
//             key={`exit-${prev}`}
//             className="hero-slide-out"
//             style={{ position: "absolute", inset: 0, zIndex: 1 }}
//           >
//             {renderSlide(prev)}
//           </div>
//         )}
//         <div
//           key={`enter-${current}`}
//           className="hero-slide-in"
//           style={{ position: "absolute", inset: 0, zIndex: 2 }}
//         >
//           {renderSlide(current)}
//         </div>

//         {/* Dot Navigation */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 28,
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: 200,
//             display: "flex",
//             gap: 8,
//             alignItems: "center",
//           }}
//         >
//           {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               style={{
//                 width: current === i ? 28 : 8,
//                 height: 8,
//                 borderRadius: 4,
//                 padding: 0,
//                 border: "none",
//                 cursor: "pointer",
//                 background:
//                   current === i ? "#22c55e" : "rgba(255,255,255,0.25)",
//                 transition: "all 0.35s ease",
//               }}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { useEffect, useState, useCallback, useRef } from "react";
const SLIDE_DURATION = 15000;
const FADE_DURATION = 850;
const TOTAL_SLIDES = 5;
const DARK_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";
const BRAND_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";

function Slide1() {
  return (
    <section
      className="overflow-hidden w-full h-full flex flex-col"
      style={{ background: BRAND_BG }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center md:pt-12">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          The Largest Enterprise Cloud in Pakistan Powering Human Connections with AI
        </h1>
        <p className="mt-0.5 text-base text-white md:text-lg">
          Decibel simplifies your HR digital transformation across all processes, from onboarding to retirement
        </p>
      </div>
      <div className="relative z-0 -mt-20 flex-1 w-full overflow-hidden md:-mt-24">
        <img
          src="/images/Artboard 3.png"
          alt="Hero Section"
          style={{
            width: "100%",
            height: "calc(100% + 70px)",
            objectFit: "cover",
            objectPosition: "center top",
            transform: "translateY(-105px) scale(0.9)",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

// ✅ NEW: Last slide — pure full screen image
function Slide5FullImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: DARK_BG,
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/images/Untitled design1.png"
        alt="Full Screen Slide"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          transform: "none",
          borderRadius: "0.5rem",
          boxShadow: "none",
        }}
      />
    </div>
  );
}

function DarkSlide({ headline, body, cta, visual }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: DARK_BG,
        padding: "40px 48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(40px, 7vw, 100px)",
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        <div style={{ flex: "0 0 38%" }}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
              fontWeight: 800,
              color: "#f5fff8",
              lineHeight: 1.25,
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            {headline.map((part: any, i: number) =>
              part.yellow ? (
                <span key={i} style={{ color: "#4cf29a" }}>
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(205, 221, 211, 0.72)",
              lineHeight: 1.65,
              margin: "14px 0 28px 0",
              maxWidth: 420,
            }}
          >
            {body}
          </p>
        </div>
        <div
          style={{
            flex: "0 0 55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {visual}
        </div>
      </div>
    </div>
  );
}

function DualImageVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(380px, 50vh, 600px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "12%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          zIndex: 1,
          boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src="/images/dashnew.png"
          alt="Dashboard"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "0%",
          width: "24%",
          height: "88%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          zIndex: 3,
          boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
        }}
      >
        <img
          src="/images/mobile.png"
          alt="Mobile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    </div>
  );
}

function TalentImageVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(380px, 50vh, 600px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "12%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          zIndex: 1,
          boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src="/images/talent.png"
          alt="Talent Dashboard"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "0%",
          width: "24%",
          height: "88%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          zIndex: 3,
          boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
        }}
      >
        <img
          src="/images/mobile.png"
          alt="Mobile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    </div>
  );
}

function VideoMockup({ src }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };
  return (
    <div
      style={{
        width: "clamp(340px, 52vw, 550px)",
        aspectRatio: "3.2 / 2",
        background: "linear-gradient(145deg, #1c1c1c, #2a2a2a, #111)",
        borderRadius: "0.5rem",
        padding: 14,
        boxShadow: `
          0 0 0 1px rgba(0,0,0,0.08),
          0 40px 80px rgba(0,0,0,0.18),
          0 8px 30px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#000",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            borderRadius: "0.5rem",
            display: "block",
          }}
        />
        <button
          onClick={toggleMute}
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            zIndex: 4,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 10,
            color: "white",
          }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.25)",
        }}
      />
    </div>
  );
}

const SLIDES_CONFIG = [
  null,
  {
    headline: [
      { text: "Transforming Your Journey with AI and ML: " },
      { text: "A Seamless Technological Enhancement", yellow: true },
    ],
    body: "Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.",
    cta: "Explore AI Features",
    visual: <DualImageVisual />,
  },
  {
    headline: [
      { text: "Zero Errors. Zero Delays. " },
      { text: "Payroll On Autopilot.", yellow: true },
    ],
    body: "Fully automated payroll processing with tax compliance, multi-currency support, and one-click disbursement across Pakistan and beyond.",
    cta: "See Payroll Module",
    visual: <VideoMockup src="/images/0411(4).mp4" />,
  },
  {
    headline: [
      { text: "Hire Smarter, Hire Faster " },
      { text: "with AI Matching.", yellow: true },
    ],
    body: "Let AI rank and shortlist your best-fit candidates automatically. Reduce time-to-hire by 60% with Decibel's intelligent recruitment engine.",
    cta: "Explore Talent Module",
    visual: <TalentImageVisual />,
  },
  null, // ✅ Slide 5 — handled separately in renderSlide
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setPrev(current);
      setCurrent(next);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, FADE_DURATION);
    },
    [current, fading]
  );

  useEffect(() => {
    const t = setInterval(
      () => goTo((current + 1) % TOTAL_SLIDES),
      SLIDE_DURATION
    );
    return () => clearInterval(t);
  }, [current, goTo]);

  const renderSlide = (idx: number) => {
    if (idx === 0) return <Slide1 />;
    if (idx === 4) return <Slide5FullImage />; // ✅ Last slide — pure full screen image
    const cfg = SLIDES_CONFIG[idx];
    if (!cfg) return <Slide1 />;
    return (
      <DarkSlide
        headline={cfg.headline}
        body={cfg.body}
        cta={cfg.cta}
        visual={cfg.visual}
      />
    );
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "112vh",
          minHeight: 700,
          overflow: "hidden",
        }}
      >
        {prev !== null && (
          <div
            key={`exit-${prev}`}
            className="hero-slide-out"
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          >
            {renderSlide(prev)}
          </div>
        )}
        <div
          key={`enter-${current}`}
          className="hero-slide-in"
          style={{ position: "absolute", inset: 0, zIndex: 2 }}
        >
          {renderSlide(current)}
        </div>

        {/* Dot Navigation */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 200,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: current === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                padding: 0,
                border: "none",
                cursor: "pointer",
                background:
                  current === i ? "#22c55e" : "rgba(255,255,255,0.25)",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
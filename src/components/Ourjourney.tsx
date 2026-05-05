// "use client";
// import { useEffect, useRef } from "react";

// const milestones = [
//   {
//     id: "2009", year: "2009", title: "Getting Started",
//     desc: "Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field.",
//     img: "/images/timeline/2009.png", above: true,
//   },
//   {
//     id: "2011", year: "2011", title: "First Client: British Petroleum",
//     desc: "Achieved the successful conversion of our initial client — British Petroleum with over 50 Employees.",
//     img: "/images/timeline/2011.png", above: false,
//   },
//   {
//     id: "2013", year: "2013", title: "Converted 23 Clients",
//     desc: "Successfully converted 23 clients with 4396+ Employee base across multiple industries.",
//     img: "/images/timeline/2013.png", above: true,
//   },
//   {
//     id: "2014", year: "2014", title: "Launched Decibel 4",
//     desc: "Successfully introduced Decibel 4, accompanied by growth to 15 dedicated professionals, serving 30 clients on our Enterprise Cloud Platform.",
//     img: "/images/timeline/2014.jpg", above: false,
//   },
//   {
//     id: "2016", year: "2016", title: "Mobile App Launched",
//     desc: "Decibel embarked on a full digital transformation with the unveiling of our innovative Mobile App.",
//     img: "/images/timeline/2016.png", above: true,
//   },
//   {
//     id: "2017", year: "2017", title: "Platform as a Service",
//     desc: "Total Parco stood as our inaugural SaaS client — a landmark collaboration with over 400 dedicated employees.",
//     img: "/images/timeline/2017.png", above: false,
//   },
//   {
//     id: "2018", year: "2018", title: "50,000+ Employees",
//     desc: "Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million.",
//     img: "/images/timeline/2018.png", above: true,
//   },
//   {
//     id: "2021", year: "2021", title: "5th Version of Decibel",
//     desc: "Launched the 5th Version of Decibel for Web Portal and Mobile App with major feature upgrades.",
//     img: "/images/timeline/2021.png", above: false,
//   },
//   {
//     id: "2022", year: "2022", title: "Global Expansion",
//     desc: "Marked by a Management Buyout and impressive global expansion — seamless conversion of Mondelez and payroll management across 7 countries.",
//     img: "/images/timeline/2022.png", above: true,
//   },
//   {
//     id: "2024", year: "2024", title: "Best in BPO Services Award",
//     desc: 'Expanded to 9 countries, serving 300+ clients, and won the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
//     img: "/images/timeline/2024.png", above: false,
//   },
//   {
//     id: "2025", year: "2025", title: "Launch of Zel AI Agents & Unlocked by Decibel Academy",
//     desc: 'Decibel HRMS launched Zel, an AI-powered multi-agent tool to enhance automation and engagement. Additionally, Unlocked by Decibel Academy was launched, offering training resources and certifications through booklets and YouTube tutorials.',
//     img: "/images/timeline/2024.png", above: false,
//   },
// ];

// const dots = [
//   { x: 160,  y: 60  },
//   { x: 380,  y: 240 },
//   { x: 600,  y: 60  },
//   { x: 820,  y: 240 },
//   { x: 1040, y: 60  },
//   { x: 1260, y: 240 },
//   { x: 1480, y: 60  },
//   { x: 1700, y: 240 },
//   { x: 1920, y: 60  },
//   { x: 2140, y: 240 },
//   { x: 2320, y: 150 },
// ];

// const svgPath = `
//   M 0,150 C 80,150 120,60 160,60
//   S 240,240 380,240 S 520,60 600,60
//   S 680,240 820,240 S 960,60 1040,60
//   S 1120,240 1260,240 S 1400,60 1480,60
//   S 1560,240 1700,240 S 1840,60 1920,60
//   S 2000,240 2140,240 S 2320,150 2400,150
// `;

// const G = "#22b840"; // ← single source of truth for green

// export default function OurJourney() {
//   const journeyRef = useRef<HTMLDivElement | null>(null);
//   const trackRef   = useRef<HTMLDivElement | null>(null);
//   const years = milestones.map((m) => m.year);

//   useEffect(() => {
//     const journey = journeyRef.current;
//     const track   = trackRef.current;
//     if (!journey || !track) return;

//     const svgMask   = document.querySelector(".mask-path") as SVGPathElement | null;
//     const menuLinks = document.querySelectorAll("#journey .yearbook ul li");
//     const marker    = document.querySelector(".indicator") as HTMLElement | null;

//     menuLinks.forEach((item) => {
//       item.addEventListener("click", function (this: HTMLElement) {
//         document.querySelectorAll("#journey .yearbook ul li.active")
//           .forEach((el) => el.classList.remove("active"));
//         this.classList.add("active");
//         if (marker) marker.style.transform = `translateX(${this.offsetLeft}px)`;
//       });
//     });

//     const handleScroll = () => {
//       if (!journey || !svgMask || !track) return;
//       const journeyTop   = window.scrollY + journey.getBoundingClientRect().top;
//       const positionPath = window.scrollY - journeyTop;
//       svgMask.style.strokeDashoffset = String(Math.max(0, 10000 - positionPath * 3));
//       const maxScroll    = journey.offsetHeight - window.innerHeight;
//       const progress     = Math.max(0, Math.min(1, positionPath / Math.max(maxScroll, 1)));
//       const maxTranslate = track.scrollWidth - track.offsetWidth;
//       track.style.transform = `translateX(-${progress * maxTranslate}px)`;
//       const idx   = Math.min(Math.floor(progress * years.length), years.length - 1);
//       menuLinks.forEach((li) => li.classList.remove("active"));
//       if (idx >= 0 && menuLinks[idx]) {
//         (menuLinks[idx] as HTMLElement).classList.add("active");
//         if (marker)
//           marker.style.transform = `translateX(${(menuLinks[idx] as HTMLElement).offsetLeft}px)`;
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <section id="journey" ref={journeyRef}>
//         <div className="sticky-wrap">
//           <h2>Our Evolution</h2>

//           {/* Yearbook bar */}
//           <div className="yearbook-bar">
//             <div className="yearbook">
//               <ul>
//                 {years.map((y) => (
//                   <li key={y} className={`y-${y}`}>
//                     <a href={`#yb-${y}`}>{y}</a>
//                   </li>
//                 ))}
//               </ul>
//               <span className="indicator" />
//             </div>
//           </div>

//           {/* Track */}
//           <div className="track-overflow">
//             <div className="track" ref={trackRef}>
//               <div className="svg-track">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 2400 300"
//                   height="300"
//                   width="2400"
//                   style={{ display: "block", flexShrink: 0, marginTop: 40 }}
//                 >
//                   <path
//                     fill="none"
//                     stroke="#E6EAEB"
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <path
//                     mask="url('#hmask')"
//                     fill="none"
//                     stroke={G}
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <defs>
//                     <mask id="hmask">
//                       <path
//                         className="mask-path"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="60"
//                         strokeMiterlimit="10"
//                         d={svgPath}
//                       />
//                     </mask>
//                   </defs>
//                 </svg>

//                 {milestones.map((m, i) => {
//                   const dot = dots[i] ?? dots[dots.length - 1] ?? { x: 0, y: 0 };
//                   const cx  = dot.x;
//                   const cy  = dot.y + 40;
//                   const tooltipClass = m.above ? "tt-below" : "tt-above";

//                   return (
//                     <div
//                       key={m.id}
//                       id={`yb-${m.id}`}
//                       className="circle-wrap"
//                       style={{ left: cx, top: cy }}
//                     >
//                       <div className={`journey-tooltip ${tooltipClass}`}>
//                         <h3>{m.title}</h3>
//                         <p>{m.desc}</p>
//                       </div>

//                       <div className="path-circle">
//                         <img src={m.img} alt={m.year} />
//                       </div>

//                       {/* Year - ALWAYS below circle */}
//                       <div className="path-year" style={{ top: "calc(100% + 6px)" }}>
//                         {m.year}
//                       </div>

//                       {/* Title - ALWAYS below year */}
//                       <div className="path-title" style={{ top: "calc(100% + 30px)" }}>
//                         {m.title}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef } from "react";

// const milestones = [
//   {
//     id: "2009", year: "2009", title: "Getting Started",
//     desc: "Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field.",
//     img: "/images/timeline/2009.png", above: true,
//   },
//   {
//     id: "2011", year: "2011", title: "First Client: British Petroleum",
//     desc: "Achieved the successful conversion of our initial client — British Petroleum with over 50 Employees.",
//     img: "/images/timeline/2011.png", above: false,
//   },
//   {
//     id: "2013", year: "2013", title: "Converted 23 Clients",
//     desc: "Successfully converted 23 clients with 4396+ Employee base across multiple industries.",
//     img: "/images/timeline/2013.png", above: true,
//   },
//   {
//     id: "2014", year: "2014", title: "Launched Decibel 4",
//     desc: "Successfully introduced Decibel 4, accompanied by growth to 15 dedicated professionals, serving 30 clients on our Enterprise Cloud Platform.",
//     img: "/images/timeline/2014.jpg", above: false,
//   },
//   {
//     id: "2016", year: "2016", title: "Mobile App Launched",
//     desc: "Decibel embarked on a full digital transformation with the unveiling of our innovative Mobile App.",
//     img: "/images/timeline/2016.png", above: true,
//   },
//   {
//     id: "2017", year: "2017", title: "Platform as a Service",
//     desc: "Total Parco stood as our inaugural SaaS client — a landmark collaboration with over 400 dedicated employees.",
//     img: "/images/timeline/2017.png", above: false,
//   },
//   {
//     id: "2018", year: "2018", title: "50,000+ Employees",
//     desc: "Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million.",
//     img: "/images/timeline/2018.png", above: true,
//   },
//   {
//     id: "2021", year: "2021", title: "5th Version of Decibel",
//     desc: "Launched the 5th Version of Decibel for Web Portal and Mobile App with major feature upgrades.",
//     img: "/images/timeline/2021.png", above: false,
//   },
//   {
//     id: "2022", year: "2022", title: "Global Expansion",
//     desc: "Marked by a Management Buyout and impressive global expansion — seamless conversion of Mondelez and payroll management across 7 countries.",
//     img: "/images/timeline/2022.png", above: true,
//   },
//   {
//     id: "2024", year: "2024", title: "Best in BPO Services Award",
//     desc: 'Expanded to 9 countries, serving 300+ clients, and won the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
//     img: "/images/timeline/2024.png", above: false,
//   },
//   {
//     id: "2025", year: "2025", title: "Launch of Zel AI Agents & Unlocked by Decibel Academy",
//     desc: 'Decibel HRMS launched Zel, an AI-powered multi-agent tool to enhance automation and engagement. Additionally, Unlocked by Decibel Academy was launched, offering training resources and certifications through booklets and YouTube tutorials.',
//     img: "/images/timeline/2024.png", above: true,  // ← above: true so it sits on a peak
//   },
// ];

// const dots = [
//   { x: 160,  y: 60  },  // 2009 - above (peak)
//   { x: 380,  y: 240 },  // 2011 - below (valley)
//   { x: 600,  y: 60  },  // 2013 - above (peak)
//   { x: 820,  y: 240 },  // 2014 - below (valley)
//   { x: 1040, y: 60  },  // 2016 - above (peak)
//   { x: 1260, y: 240 },  // 2017 - below (valley)
//   { x: 1480, y: 60  },  // 2018 - above (peak)
//   { x: 1700, y: 240 },  // 2021 - below (valley)
//   { x: 1920, y: 60  },  // 2022 - above (peak)
//   { x: 2140, y: 240 },  // 2024 - below (valley)
//   { x: 2360, y: 60  },  // 2025 - above (peak) ← FIXED: was { x: 2320, y: 150 }
// ];

// // FIXED: Extended path so 2025 sits on a proper peak (y:60) like other "above" milestones
// const svgPath = `
//   M 0,150 C 80,150 120,60 160,60
//   S 240,240 380,240 S 520,60 600,60
//   S 680,240 820,240 S 960,60 1040,60
//   S 1120,240 1260,240 S 1400,60 1480,60
//   S 1560,240 1700,240 S 1840,60 1920,60
//   S 2000,240 2140,240 S 2280,60 2360,60
//   S 2440,240 2580,240 S 2650,150 2700,150
// `;

// const G = "#22b840";

// export default function OurJourney() {
//   const journeyRef = useRef<HTMLDivElement | null>(null);
//   const trackRef   = useRef<HTMLDivElement | null>(null);
//   const years = milestones.map((m) => m.year);

//   useEffect(() => {
//     const journey = journeyRef.current;
//     const track   = trackRef.current;
//     if (!journey || !track) return;

//     const svgMask   = document.querySelector(".mask-path") as SVGPathElement | null;
//     const menuLinks = document.querySelectorAll("#journey .yearbook ul li");
//     const marker    = document.querySelector(".indicator") as HTMLElement | null;

//     menuLinks.forEach((item) => {
//       item.addEventListener("click", function (this: HTMLElement) {
//         document.querySelectorAll("#journey .yearbook ul li.active")
//           .forEach((el) => el.classList.remove("active"));
//         this.classList.add("active");
//         if (marker) marker.style.transform = `translateX(${this.offsetLeft}px)`;
//       });
//     });

//     const handleScroll = () => {
//       if (!journey || !svgMask || !track) return;
//       const journeyTop   = window.scrollY + journey.getBoundingClientRect().top;
//       const positionPath = window.scrollY - journeyTop;
//       svgMask.style.strokeDashoffset = String(Math.max(0, 10000 - positionPath * 3));
//       const maxScroll    = journey.offsetHeight - window.innerHeight;
//       const progress     = Math.max(0, Math.min(1, positionPath / Math.max(maxScroll, 1)));
//       const maxTranslate = track.scrollWidth - track.offsetWidth;
//       track.style.transform = `translateX(-${progress * maxTranslate}px)`;
//       const idx   = Math.min(Math.floor(progress * years.length), years.length - 1);
//       menuLinks.forEach((li) => li.classList.remove("active"));
//       if (idx >= 0 && menuLinks[idx]) {
//         (menuLinks[idx] as HTMLElement).classList.add("active");
//         if (marker)
//           marker.style.transform = `translateX(${(menuLinks[idx] as HTMLElement).offsetLeft}px)`;
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <section id="journey" ref={journeyRef}>
//         <div className="sticky-wrap">
//           <h2>Our Evolution</h2>

//           {/* Yearbook bar */}
//           <div className="yearbook-bar">
//             <div className="yearbook">
//               <ul>
//                 {years.map((y) => (
//                   <li key={y} className={`y-${y}`}>
//                     <a href={`#yb-${y}`}>{y}</a>
//                   </li>
//                 ))}
//               </ul>
//               <span className="indicator" />
//             </div>
//           </div>

//           {/* Track */}
//           <div className="track-overflow">
//             <div className="track" ref={trackRef}>
//               <div className="svg-track">
//                 {/* FIXED: viewBox and width updated to 2700 to match extended path */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 2700 300"
//                   height="300"
//                   width="2700"
//                   style={{ display: "block", flexShrink: 0, marginTop: 40 }}
//                 >
//                   <path
//                     fill="none"
//                     stroke="#E6EAEB"
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <path
//                     mask="url('#hmask')"
//                     fill="none"
//                     stroke={G}
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <defs>
//                     <mask id="hmask">
//                       <path
//                         className="mask-path"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="60"
//                         strokeMiterlimit="10"
//                         d={svgPath}
//                       />
//                     </mask>
//                   </defs>
//                 </svg>

//                 {milestones.map((m, i) => {
//                   const dot = dots[i] ?? dots[dots.length - 1] ?? { x: 0, y: 0 };
//                   const cx  = dot.x;
//                   const cy  = dot.y + 40;
//                   const tooltipClass = m.above ? "tt-below" : "tt-above";

//                   return (
//                     <div
//                       key={m.id}
//                       id={`yb-${m.id}`}
//                       className="circle-wrap"
//                       style={{ left: cx, top: cy }}
//                     >
//                       <div className={`journey-tooltip ${tooltipClass}`}>
//                         <h3>{m.title}</h3>
//                         <p>{m.desc}</p>
//                       </div>
//                       <div className="path-circle">
//                         <img src={m.img} alt={m.year} />
//                       </div>
//                       {/* Year - ALWAYS below circle */}
//                       <div className="path-year" style={{ top: "calc(100% + 6px)" }}>
//                         {m.year}
//                       </div>
//                       {/* Title - ALWAYS below year */}
//                       <div className="path-title" style={{ top: "calc(100% + 30px)" }}>
//                         {m.title}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import { useEffect, useRef } from "react";

const milestones = [
  {
    id: "2009", year: "2009", title: "Getting Started",
    desc: "Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field.",
    img: "/images/timeline/2009.png", above: true,
  },
  {
    id: "2011", year: "2011", title: "First Client: British Petroleum",
    desc: "Achieved the successful conversion of our initial client — British Petroleum with over 50 Employees.",
    img: "/images/timeline/2011.png", above: false,
  },
  {
    id: "2013", year: "2013", title: "Converted 23 Clients",
    desc: "Successfully converted 23 clients with 4396+ Employee base across multiple industries.",
    img: "/images/timeline/2013.png", above: true,
  },
  {
    id: "2014", year: "2014", title: "Launched Decibel 4",
    desc: "Successfully introduced Decibel 4, accompanied by growth to 15 dedicated professionals, serving 30 clients on our Enterprise Cloud Platform.",
    img: "/images/timeline/2014.jpg", above: false,
  },
  {
    id: "2016", year: "2016", title: "Mobile App Launched",
    desc: "Decibel embarked on a full digital transformation with the unveiling of our innovative Mobile App.",
    img: "/images/timeline/2016.png", above: true,
  },
  {
    id: "2017", year: "2017", title: "Platform as a Service",
    desc: "Total Parco stood as our inaugural SaaS client — a landmark collaboration with over 400 dedicated employees.",
    img: "/images/timeline/2017.png", above: false,
  },
  {
    id: "2018", year: "2018", title: "50,000+ Employees",
    desc: "Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million.",
    img: "/images/timeline/2018.png", above: true,
  },
  {
    id: "2021", year: "2021", title: "5th Version of Decibel",
    desc: "Launched the 5th Version of Decibel for Web Portal and Mobile App with major feature upgrades.",
    img: "/images/timeline/2021.png", above: false,
  },
  {
    id: "2022", year: "2022", title: "Global Expansion",
    desc: "Marked by a Management Buyout and impressive global expansion — seamless conversion of Mondelez and payroll management across 7 countries.",
    img: "/images/timeline/2022.png", above: true,
  },
  {
    id: "2024", year: "2024", title: "Best in BPO Services Award",
    desc: 'Expanded to 9 countries, serving 300+ clients, and won the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
    img: "/images/timeline/2024.png", above: false,
  },
  {
    id: "2025", year: "2025", title: "Launch of Zel AI Agents & Unlocked by Decibel Academy",
    desc: 'Decibel HRMS launched Zel, an AI-powered multi-agent tool to enhance automation and engagement. Additionally, Unlocked by Decibel Academy was launched, offering training resources and certifications through booklets and YouTube tutorials.',
    img: "/images/timeline/2024.png", above: true,
  },
];

const dots = [
  { x: 160,  y: 60  },
  { x: 380,  y: 240 },
  { x: 600,  y: 60  },
  { x: 820,  y: 240 },
  { x: 1040, y: 60  },
  { x: 1260, y: 240 },
  { x: 1480, y: 60  },
  { x: 1700, y: 240 },
  { x: 1920, y: 60  },
  { x: 2140, y: 240 },
  { x: 2360, y: 60  },
];

const svgPath = `
  M 0,150 C 80,150 120,60 160,60
  S 240,240 380,240 S 520,60 600,60
  S 680,240 820,240 S 960,60 1040,60
  S 1120,240 1260,240 S 1400,60 1480,60
  S 1560,240 1700,240 S 1840,60 1920,60
  S 2000,240 2140,240 S 2280,60 2360,60
  S 2440,240 2580,240 S 2650,150 2700,150
`;

const G = "#22b840";

export default function OurJourney() {
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const trackRef   = useRef<HTMLDivElement | null>(null);
  const years = milestones.map((m) => m.year);

  useEffect(() => {
    const journey = journeyRef.current;
    const track   = trackRef.current;
    if (!journey || !track) return;

    const svgMask   = document.querySelector(".mask-path") as SVGPathElement | null;
    const menuLinks = document.querySelectorAll("#journey .yearbook ul li");
    const marker    = document.querySelector(".indicator") as HTMLElement | null;

    menuLinks.forEach((item) => {
      item.addEventListener("click", function (this: HTMLElement) {
        document.querySelectorAll("#journey .yearbook ul li.active")
          .forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
        if (marker) marker.style.transform = `translateX(${this.offsetLeft}px)`;
      });
    });

    const handleScroll = () => {
      if (!journey || !svgMask || !track) return;
      const journeyTop   = window.scrollY + journey.getBoundingClientRect().top;
      const positionPath = window.scrollY - journeyTop;
      svgMask.style.strokeDashoffset = String(Math.max(0, 10000 - positionPath * 3));
      const maxScroll    = journey.offsetHeight - window.innerHeight;
      const progress     = Math.max(0, Math.min(1, positionPath / Math.max(maxScroll, 1)));
      const maxTranslate = track.scrollWidth - track.offsetWidth;
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      const idx = Math.min(Math.floor(progress * years.length), years.length - 1);
      menuLinks.forEach((li) => li.classList.remove("active"));
      if (idx >= 0 && menuLinks[idx]) {
        (menuLinks[idx] as HTMLElement).classList.add("active");
        if (marker)
          marker.style.transform = `translateX(${(menuLinks[idx] as HTMLElement).offsetLeft}px)`;
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="journey" ref={journeyRef}>
        <div className="sticky-wrap">
          <h2>Our Evolution</h2>

          <div className="yearbook-bar">
            <div className="yearbook">
              <ul>
                {years.map((y) => (
                  <li key={y} className={`y-${y}`}>
                    <a href={`#yb-${y}`}>{y}</a>
                  </li>
                ))}
              </ul>
              <span className="indicator" />
            </div>
          </div>

          <div className="track-overflow">
            <div className="track" ref={trackRef}>
              <div className="svg-track">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2700 300"
                  height="300"
                  width="2700"
                  style={{ display: "block", flexShrink: 0, marginTop: 40 }}
                >
                  <path
                    fill="none"
                    stroke="#E6EAEB"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    d={svgPath}
                  />
                  <path
                    mask="url('#hmask')"
                    fill="none"
                    stroke={G}
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    d={svgPath}
                  />
                  <defs>
                    <mask id="hmask">
                      <path
                        className="mask-path"
                        fill="none"
                        stroke="white"
                        strokeWidth="60"
                        strokeMiterlimit="10"
                        d={svgPath}
                      />
                    </mask>
                  </defs>
                </svg>

                {milestones.map((m, i) => {
                  const dot = dots[i] ?? dots[dots.length - 1] ?? { x: 0, y: 0 };
                  const cx  = dot.x;
                  const cy  = dot.y + 40;
                  const tooltipClass = m.above ? "tt-below" : "tt-above";

                  // ✅ 2025 ke liye right shift — baaki sab center
                  const is2025 = m.id === "2025";

                  return (
                    <div
                      key={m.id}
                      id={`yb-${m.id}`}
                      className="circle-wrap"
                      style={{ left: cx, top: cy }}
                    >
                      <div className={`journey-tooltip ${tooltipClass}`}>
                        <h3>{m.title}</h3>
                        <p>{m.desc}</p>
                      </div>

                      <div className="path-circle">
                        <img src={m.img} alt={m.year} />
                      </div>

                      {/* Year */}
                      <div
                        className="path-year"
                        style={{
                          position: "absolute",
                          top: "calc(100% + 8px)",
                          // ✅ 2025: left 50% + right shift, baaki: center
                          left: is2025 ? "calc(50% + 10px)" : "50%",
                          // transform: "translateX(-50%)",
                          transform: is2025 ? "translateX(-30%)" : "translateX(-50%)",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                        }}
                      >
                        {m.year}
                      </div>

                      {/* Title */}
                      <div
                        className="path-title"
                        style={{
                          position: "absolute",
                          top: "calc(100% + 34px)",
                          // ✅ 2025: left 50% + right shift, baaki: center
                          left: is2025 ? "calc(50% + 40px)" : "50%",
                          transform: "translateX(-50%)",
                          textAlign: "center",
                          width: "180px",
                          whiteSpace: "normal",
                          lineHeight: "1.3",
                        }}
                      >
                        {m.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Leap2024Page() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-03-04T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="leap-2024-page">

      {/* ── NAVBAR ── */}
      <Navbar />

     {/* ── HERO / ABOUT COMBINED ── */}
<div className="about-wrap" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
  <div className="about-inner">
    <h2>Decibel HRMS at Leap 2024</h2>
    <p>
      Decibel HRMS is excited to join the vibrant community at LEAP 2024, the region&apos;s biggest
      technology event in Riyadh this March. We will explore the future of technology and artificial
      intelligence, the evolving field of HR and much more. Join us as we explore human-led,
      tech-powered innovations made real for our region.
    </p>
  </div>
</div>
      {/* ── INFO BAR ── */}
      <div className="info-bar">
        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
          </div>
          <div>
            <div className="ititle">Malham, Riyadh</div>
            <div className="isub">Saudi Arabia</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
          </div>
          <div>
            <div className="ititle">Starting on March 4</div>
            <div className="isub">March 4–7, 2024</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <div className="ititle">Sponsors</div>
            <div className="isub">Sponsors</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>
          </div>
          <div>
            <div className="ititle">170,000 Tech Pros</div>
            <div className="isub">170,000 Tech Pros</div>
          </div>
        </div>
      </div>

    

      {/* ── VIDEO ── */}
      <section className="video-section">
        <h3>Learn about Human-led, tech-powered innovations made real for our region</h3>
        <div className="video-wrapper">
          {/* Apni video /public/videos/ceo-message.mp4 mein rakh do */}
          <video controls>
            <source src="/images/leap2024.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── RIYADH — text left, image right ── */}
      <div className="split">
        <div className="text-col">
          <div className="eyebrow">RIYADH</div>
          <h2 className="sec-heading">The Heart of<br />Saudi Arabia</h2>
          <p className="sec-body">
            LEAP 2024 emerges as a trailblazer in HR and tech leaders for cutting-edge discussions,
            networking, and exploring game-changing tools. It highlights its innovative features, the
            influence on HR practices, and the transformative future it signifies.
          </p>
          <a href="#" className="btn-solid">Meet us at Leap 2024</a>
        </div>
        <div className="img-col">
          <img src="/images/riyadh.jpg" alt="Riyadh Kingdom Tower" />
        </div>
      </div>

      {/* ── EPICENTER — image left, text right ── */}
      <div className="split reversed">
        <div className="img-col">
          <img src="/images/leap2024.jpeg" alt="LEAP 2024 Venue" />
        </div>
        <div className="text-col">
          <div className="eyebrow">LEAP 2024</div>
          <h2 className="sec-heading">An Innovation<br />Epicenter</h2>
          <p className="sec-body">
            At LEAP, dive deeper into the future with Decibel&apos;s booth. Get hands-on with interactive
            demos, participate in stimulating discussions, and learn how AI, DeciBot, and other innovations
            are shaping the future of work. Join the conversation – stop by our booth!
          </p>
          <a href="#" className="btn-solid">Meet us at Leap 2024</a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <Footer />
      </div>
    </>
  );
}
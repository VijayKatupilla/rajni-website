"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import GoogleReviews from "../components/GoogleReviews";

const locations = [
  {
    name: "Rajni Madison",
    city: "Madison, WI",
    address: "429 Commerce Drive, Madison, WI 53719",
    phone: "(608) 123-4567",
    map: "https://www.google.com/maps/place/Rajni+Indian+Cuisine,+429+Commerce+Dr,+Madison,+WI+53719",
    order: "https://order.toasttab.com/online/rajni-madison-429-commerce-drive",
  },
  {
    name: "Rajni Atlanta",
    city: "Atlanta, GA",
    address: "Peachtree Street, Atlanta, GA",
    phone: "(470) 555-1212",
    map: "https://maps.google.com",
    order: "https://order.toasttab.com/online/rajni-madison-429-commerce-drive",
  },
  {
    name: "Rajni Parsippany",
    city: "Parsippany, NJ",
    address: "Morris Corporate Center, Parsippany, NJ",
    phone: "(973) 555-2020",
    map: "https://maps.google.com",
    order: "https://order.toasttab.com/online/rajni-madison-429-commerce-drive",
  },
];

const specials = [
  {
    title: "Weekend Chef's Thali",
    description: "Limited-run thali with rotating curries, house pickle, and dessert for two.",
    tag: "Saturday + Sunday",
  },
  {
    title: "Tandoori Showcase",
    description: "Smoky platters pulled straight from the tandoor—perfect for sharing over cocktails.",
    tag: "Friday Nights",
  },
  {
    title: "Street Food Hour",
    description: "Pani puri, chaat, and lassi pairings inspired by the reference Longtable energy.",
    tag: "4–6 PM Daily",
  },
];

const experience = [
  {
    title: "Crafted Like Home",
    description: "Family recipes, hand-ground spices, and a kitchen that cooks in small batches for depth of flavor.",
  },
  {
    title: "Sip & Savor",
    description: "Signature lassis, curated wines, and mocktails that balance the spice with smooth, bright notes.",
  },
  {
    title: "Atmosphere",
    description: "Red lounge seating, celebratory artwork, and playlists tuned for nights that feel special.",
  },
];

const happenings = [
  {
    title: "Private Dining",
    text: "Reserve intimate space for celebrations, corporate dinners, or meetups.",
  },
  {
    title: "Gift Cards",
    text: "Share a Rajni night out—digital and physical cards available in minutes.",
  },
  {
    title: "Community Events",
    text: "Bollywood brunches, regional tasting menus, and chef tables inspired by Longtable gatherings.",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.svg", alt: "Rajni dining room with red booths" },
  { src: "/images/gallery-2.svg", alt: "Rajni mural art" },
  { src: "/images/gallery-3.svg", alt: "Rajni Madison skyline art" },
  { src: "/images/gallery-4.svg", alt: "Rajni dining setup" },
  { src: "/images/gallery-5.svg", alt: "Rajni celebration balloons" },
  { src: "/images/gallery-6.svg", alt: "Rajni carved fruit display" },
  { src: "/images/gallery-7.svg", alt: "Rajni exterior sign at night" },
  { src: "/images/gallery-8.svg", alt: "Rajni exterior entrance" },
  { src: "/images/gallery-9.svg", alt: "Rajni dining booths at night" },
];

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const activeLocation = useMemo(() => locations[selectedLocation], [selectedLocation]);

  return (
    <div className="page">
      <section id="home" className="hero">
        <div className="hero__media">
          <Image src="/images/gallery-7.svg" alt="Rajni exterior" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="eyebrow">Modern Indian Dining</div>
          <h1>Rajni Indian Cuisine</h1>
          <p className="lede">
            A celebratory dining room inspired by Longtable—with red lounge seating, handcrafted spices, and cocktails
            built for toasting every win.
          </p>
          <div className="location-tabs">
            {locations.map((loc, index) => (
              <button
                key={loc.name}
                className={`pill ${index === selectedLocation ? "active" : ""}`}
                onClick={() => setSelectedLocation(index)}
              >
                {loc.name}
              </button>
            ))}
          </div>
          <div className="location-card">
            <div>
              <p className="eyebrow">Now viewing</p>
              <h3>{activeLocation.name}</h3>
              <p className="muted">{activeLocation.city}</p>
            </div>
            <div className="location-meta">
              <span>{activeLocation.address}</span>
              <a href={`tel:${activeLocation.phone.replace(/[^\d]/g, "")}`}>{activeLocation.phone}</a>
              <div className="hero__actions">
                <a className="btn primary" href={activeLocation.order} target="_blank" rel="noreferrer">
                  Order Online
                </a>
                <a className="btn secondary" href={activeLocation.map} target="_blank" rel="noreferrer">
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="panel">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Designed for gatherings</h2>
          <p className="lede narrow">
            House curries, tandoor platters, and playlists tuned to feel like Longtable—Rajni wraps your night in warm
            hospitality.
          </p>
        </div>
        <div className="card-grid">
          {experience.map((item) => (
            <div key={item.title} className="card focus">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="panel alt">
        <div className="section-header">
          <p className="eyebrow">Events</p>
          <h2>Happenings & gatherings</h2>
          <p className="lede narrow">
            From chef tables to corporate dinners, Rajni layers every detail—lighting, spices, and music—for nights that
            linger.
          </p>
        </div>
        <div className="card-grid thirds">
          {happenings.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="specials" className="panel">
        <div className="section-header">
          <p className="eyebrow">Weekend Specials</p>
          <h2>Seasonal plates inspired by the reference vibe</h2>
          <p className="lede narrow">
            Every weekend features a new spotlight—perfect for repeat visits and Longtable-style celebrations.
          </p>
        </div>
        <div className="card-grid">
          {specials.map((item) => (
            <div key={item.title} className="card">
              <div className="pill-row">
                <span className="pill alt">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="catering" className="panel alt split">
        <div className="split__content">
          <p className="eyebrow">Catering & Events</p>
          <h2>Bring Rajni to your venue</h2>
          <p className="lede">
            Weddings, corporate lunches, graduations—we design custom menus and can deliver, set up, or host.
          </p>
          <div className="list">
            <span>Full-service catering with staffing</span>
            <span>Buffet or plated service available</span>
            <span>Pairings menu for wine, beer, and mocktails</span>
          </div>
          <a className="btn primary" href="#contact">
            Talk with our team
          </a>
        </div>
        <div className="split__media">
          <div className="media-card">
            <p className="eyebrow">Reservation Hours</p>
            <h3>Lunch & Dinner</h3>
            <ul>
              <li>Mon–Thu: 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM</li>
              <li>Fri–Sat: 11:00 AM – 2:30 PM / 5:00 PM – 10:00 PM</li>
              <li>Sun: 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM</li>
            </ul>
            <div className="pill-row">
              <span className="pill">Dine-in</span>
              <span className="pill">Takeout</span>
              <span className="pill">Catering</span>
            </div>
          </div>
        </div>
      </section>

      <section id="reserve" className="panel">
        <div className="card focus">
          <h3>Reserve a table</h3>
          <p className="muted">Share when you’re visiting, and we’ll hold your seats with Longtable-level care.</p>
          <div className="pill-row">
            <span className="pill alt">Lunch & Dinner</span>
            <span className="pill">Groups up to 20</span>
          </div>
          <button className="btn primary" onClick={() => setIsReserveOpen(true)}>
            Open reservation form
          </button>
        </div>
      </section>

      <section id="contact" className="panel alt">
        <div className="section-header">
          <p className="eyebrow">Catering Inquiry</p>
          <h2>Plan your event with Rajni</h2>
          <p className="lede narrow">Tell us about your celebration, and we’ll design a menu and experience.</p>
        </div>
        <div className="card">
          <h3>Request catering</h3>
          <p className="muted">Dedicated tastings, custom menus, and staffing that travels to your venue.</p>
          <div className="pill-row">
            <span className="pill">Staffed service</span>
            <span className="pill alt">Buffet or plated</span>
          </div>
          <button className="btn secondary" onClick={() => setIsCateringOpen(true)}>
            Open catering form
          </button>
        </div>
      </section>

      <section id="gallery" className="panel">
        <div className="section-header">
          <p className="eyebrow">Gallery</p>
          <h2>Inside Rajni</h2>
          <p className="lede narrow">A peek into the red booths, mural art, fruit carving, and nighttime glow.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.src} className="gallery-card">
              <Image src={image.src} alt={image.alt} width={520} height={360} />
              <span className="muted">{image.alt}</span>
            </div>
          ))}
        </div>
      </section>

      <GoogleReviews />

      {isReserveOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation form"
          onClick={() => setIsReserveOpen(false)}
        >
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Reserve a table</h3>
              <button className="icon-btn" onClick={() => setIsReserveOpen(false)} aria-label="Close reservation form">
                ×
              </button>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Reservation request sent! We'll reach out shortly.");
                setIsReserveOpen(false);
              }}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Phone
                  <input name="phone" placeholder="(555) 555-5555" required />
                </label>
                <label>
                  Party Size
                  <input type="number" name="party" min="1" max="20" placeholder="4" required />
                </label>
                <label>
                  Date
                  <input type="date" name="date" required />
                </label>
                <label>
                  Time
                  <input type="time" name="time" required />
                </label>
                <label className="full">
                  Notes
                  <textarea name="notes" rows={3} placeholder="Allergies, celebrations, or seating requests" />
                </label>
              </div>
              <button type="submit" className="btn primary">
                Submit Reservation
              </button>
            </form>
          </div>
        </div>
      )}

      {isCateringOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Catering form"
          onClick={() => setIsCateringOpen(false)}
        >
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Catering inquiry</h3>
              <button className="icon-btn" onClick={() => setIsCateringOpen(false)} aria-label="Close catering form">
                ×
              </button>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Catering request sent! We'll reach out shortly.");
                setIsCateringOpen(false);
              }}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Phone
                  <input name="phone" placeholder="(555) 555-5555" required />
                </label>
                <label>
                  Event Type
                  <input name="type" placeholder="Wedding, corporate lunch, birthday" required />
                </label>
                <label>
                  Guest Count
                  <input type="number" name="guests" min="10" max="400" placeholder="80" required />
                </label>
                <label>
                  Date
                  <input type="date" name="date" required />
                </label>
                <label className="full">
                  Notes
                  <textarea name="notes" rows={3} placeholder="Service style, venue, cuisine preferences" />
                </label>
              </div>
              <button type="submit" className="btn primary">
                Submit Catering Request
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 96px;
        }

        .hero {
          position: relative;
          min-height: 80vh;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          color: var(--text);
        }

        .hero__media {
          position: absolute;
          inset: 0;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(250, 245, 237, 0.18), rgba(250, 245, 237, 0.82));
        }

        .hero__content {
          position: relative;
          max-width: 900px;
          padding: 0 20px 40px;
        }

        h1 {
          font-size: clamp(38px, 6vw, 64px);
          letter-spacing: 0.02em;
          margin: 6px 0 16px;
          color: var(--cream);
        }

        h2 {
          font-size: clamp(28px, 4vw, 44px);
          margin: 6px 0 16px;
          color: var(--cream);
        }

        h3 {
          margin: 0 0 10px;
          font-size: clamp(20px, 2.2vw, 24px);
          color: var(--cream);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 12px;
          color: var(--accent);
          margin: 0 0 8px;
          font-weight: 700;
        }

        .lede {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
          margin: 0 auto 16px;
        }

        .lede.narrow {
          max-width: 760px;
        }

        .hero__actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
          border: 1px solid transparent;
          min-width: 180px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .btn.secondary {
          border-color: var(--gold);
          color: var(--cream);
          background: rgba(255, 255, 255, 0.7);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
        }

        .panel {
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .panel.alt {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.9));
          padding: 60px 24px;
          border-block: 1px solid var(--border);
          backdrop-filter: blur(8px);
        }

        .section-header {
          text-align: center;
          max-width: 920px;
          margin: 0 auto;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .card-grid.thirds {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 20px;
          display: grid;
          gap: 10px;
          min-height: 180px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
        }

        .card.focus {
          background: linear-gradient(145deg, rgba(246, 201, 121, 0.08), rgba(255, 255, 255, 0.9));
          border-color: rgba(194, 123, 22, 0.25);
        }

        .card p {
          color: var(--muted);
          margin: 0;
          line-height: 1.6;
        }

        .muted {
          color: var(--muted);
          font-size: 14px;
        }

        .split {
          display: grid;
          gap: 20px;
          align-items: center;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .split__content {
          display: grid;
          gap: 14px;
          max-width: 560px;
        }

        .list {
          display: grid;
          gap: 8px;
          color: var(--cream);
          font-weight: 600;
        }

        .split__media {
          display: flex;
          justify-content: center;
        }

        .media-card {
          width: min(420px, 100%);
          background: #fff8ee;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }

        .media-card ul {
          padding-left: 18px;
          margin: 10px 0 12px;
          color: var(--muted);
          line-height: 1.7;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(194, 123, 22, 0.12);
          color: var(--cream);
          border: 1px solid rgba(194, 123, 22, 0.35);
          font-weight: 600;
        }

        .pill.alt {
          background: rgba(199, 63, 63, 0.12);
          color: var(--accent);
          border-color: rgba(199, 63, 63, 0.26);
        }

        .pill.active {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border-color: transparent;
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .contact-card {
          display: grid;
          gap: 6px;
          background: var(--panel);
          padding: 18px;
          border-radius: 16px;
          text-decoration: none;
          border: 1px solid var(--border);
        }

        .contact-card:hover {
          border-color: rgba(194, 123, 22, 0.3);
        }

        .location-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin: 18px 0;
        }

        .location-card {
          background: rgba(255, 255, 255, 0.92);
          border-radius: 16px;
          border: 1px solid var(--border);
          display: grid;
          gap: 10px;
          padding: 18px;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
        }

        .location-meta {
          display: grid;
          gap: 6px;
          justify-items: center;
        }

        .location-meta a {
          color: var(--accent);
          font-weight: 700;
          text-decoration: none;
        }

        .location-meta a:hover {
          text-decoration: underline;
        }

        .form {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px;
          display: grid;
          gap: 16px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        label {
          display: grid;
          gap: 6px;
          font-weight: 700;
          color: var(--cream);
        }

        input,
        textarea {
          border-radius: 12px;
          border: 1px solid var(--border);
          padding: 12px;
          font-size: 15px;
          font-family: inherit;
          background: #fff;
          color: var(--text);
        }

        textarea {
          resize: vertical;
        }

        label.full {
          grid-column: 1 / -1;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }

        .gallery-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }

        .gallery-card span {
          display: block;
          padding: 10px 12px 12px;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: grid;
          place-items: center;
          padding: 18px;
          z-index: 200;
          backdrop-filter: blur(4px);
        }

        .modal__content {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          border: 1px solid var(--border);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          width: min(720px, 100%);
          max-height: 90vh;
          overflow: auto;
          padding: 22px;
          display: grid;
          gap: 16px;
        }

        .modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .icon-btn {
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          width: 40px;
          height: 40px;
          font-size: 24px;
          color: var(--cream);
        }

        @media (max-width: 768px) {
          .page {
            gap: 60px;
            padding-top: 82px;
          }

          .hero {
            min-height: 70vh;
          }

          .panel,
          .panel.alt {
            padding-inline: 18px;
          }

          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
